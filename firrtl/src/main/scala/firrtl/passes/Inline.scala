// SPDX-License-Identifier: Apache-2.0

package firrtl
package passes

import firrtl.annotations._
import firrtl.options.{HasShellOptions, ShellOption}

/** Indicates that something should be inlined */
@deprecated("All APIs in package firrtl are deprecated.", "Chisel 7.0.0")
case class InlineAnnotation(target: Named) extends SingleTargetAnnotation[Named] {
  def duplicate(n: Named) = InlineAnnotation(n)
}

@deprecated("All APIs in package firrtl are deprecated.", "Chisel 7.0.0")
object InlineAnnotation extends HasShellOptions {

  override val options = Seq(
    new ShellOption[Seq[String]](
      longOption = "inline",
      toAnnotationSeq = (a: Seq[String]) =>
        a.map { value =>
          value.split('.') match {
            case Array(circuit, module) =>
              InlineAnnotation(ModuleName(module))
            case Array(circuit, module, inst) =>
              InlineAnnotation(ComponentName(inst, ModuleName(module)))
          }
        },
      helpText = "Inline selected modules",
      shortOption = Some("fil"),
      helpValueName = Some("<circuit>[.<module>[.<instance>]][,...]")
    )
  )

}
