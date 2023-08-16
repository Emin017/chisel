// SPDX-License-Identifier: Apache-2.0

package chisel3.properties

import chisel3.{BaseType, Data, RawModule, SpecifiedDirection}
import chisel3.experimental.{BaseModule, SourceInfo}
import chisel3.internal.{throwException, Builder, ClassBinding, OpBinding}
import chisel3.internal.firrtl.{Arg, Command, Component, DefClass, DefObject, ModuleIO, Port, PropAssign}

import scala.annotation.nowarn
import scala.collection.mutable.ArrayBuffer

@nowarn("msg=class Port") // delete when Port becomes private
class Class extends BaseModule {
  private[chisel3] override def generateComponent(): Option[Component] = {
    // Close the Class.
    require(!_closed, "Can't generate Class more than once")

    _closed = true

    // Ports are named in the same way as regular Modules
    namePorts()

    // Now that elaboration is complete for this Module, we can finalize names
    for (id <- getIds) {
      id match {
        case id: DynamicObject => {
          // Force name of the Object, and set its Property[ClassType] type's ref to the Object.
          // The type's ref can't be set within instantiate, because the Object hasn't been named yet.
          id.forceName(default = "_object", _namespace)
          id.getReference.setRef(id.getRef)
        }
        case id: BaseType =>
          if (id.isSynthesizable) {
            id.topBinding match {
              case ClassBinding(_) =>
                id.forceName(default = "_T", _namespace)
              case _ => ()
            }
          }
        case _ => ()
      }
    }

    // Create IR Ports and set the firrtlPorts variable.
    val ports = getModulePortsAndLocators.map {
      case (port, sourceInfo) =>
        Port(port, port.specifiedDirection, sourceInfo)
    }

    // Note that we do not set _component, so no DefInstance is created.
    // Class handles instantiation through its own APIs.

    // Return the Component.
    Some(DefClass(this, name, ports, _commands.toSeq))
  }

  private[chisel3] override def initializeInParent(): Unit = ()

  override def IO[T <: BaseType](iodef: => T)(implicit sourceInfo: SourceInfo): T = {
    val io = iodef // evaluate once so we can match on it (is it a problem to do here?)

    io match {
      case _: Data => throwException(s"Class ports must be Property type, but found $io")
      case _ => chisel3.IO.apply(io)
    }
  }

  /** Add a PropAssign command to the Class
    *
    * Most commands are unsupported in Class, so the internal addCommand API explicitly supports certain commands.
    */
  private[chisel3] def addCommand(c: PropAssign): Unit = addCommandImpl(c)

  /** Add a DefObject command to the Class
    *
    * Most commands are unsupported in Class, so the internal addCommand API explicitly supports certain commands.
    */
  private[chisel3] def addCommand(c: DefObject): Unit = addCommandImpl(c)

  /** Internal state and logic to maintain a buffer of commands.
    */
  private val _commands = new ArrayBuffer[Command]()
  private def addCommandImpl(c: Command): Unit = {
    require(!_closed, "Can't write to Class after close")
    _commands += c
  }

  def instantiate(implicit sourceInfo: SourceInfo): DynamicObject = {
    // Instantiate the Object.
    val obj = new DynamicObject(this)

    // Get its Property[ClassType] type.
    val classProp = obj.getReference

    // Get the BaseModule this connect is occuring within, which may be a RawModule or Class.
    val contextMod = Builder.referenceUserContainer

    // Add the DefObject command directly onto the correct BaseModule subclass.
    // Bind the Property[ClassType] type for this Object.
    contextMod match {
      case rm: RawModule => {
        rm.addCommand(DefObject(sourceInfo, obj))
        classProp.bind(OpBinding(rm, Builder.currentWhen), SpecifiedDirection.Unspecified)
      }
      case cls: Class => {
        cls.addCommand(DefObject(sourceInfo, obj))
        classProp.bind(ClassBinding(cls), SpecifiedDirection.Unspecified)
      }
      case _ => throwException("Internal Error! Property connection can only occur within RawModule or Class.")
    }

    obj
  }

  private[properties] def getField[T: PropertyType](name: String): Option[Property[T]] = {
    // TODO: inefficient and not actually type safe, need to figure out the right way.
    getModulePortsAndLocators.collectFirst {
      case (port, _) if port.seedOpt.contains(name) =>
        port.asInstanceOf[Property[T]]
    }
  }
}

/** Represent a Class type for referencing a Class in a Property[ClassType]
  */
class ClassType private[chisel3] (_name: String) {
  lazy val name = _name
}

object Class {

  /** Helper to create a Property[ClassType] type for a Class of a given name.
    *
    * This is useful when a Property[ClassType] type is needed but the class does not yet exist or is not available.
    *
    * *WARNING*: It is the caller's resonsibility to ensure the Class exists, this is not checked automatically.
    */
  def unsafeGetReferenceType(className: String): Property[ClassType] = {
    new Property[ClassType](Some(new ClassType(className)))
  }
}
