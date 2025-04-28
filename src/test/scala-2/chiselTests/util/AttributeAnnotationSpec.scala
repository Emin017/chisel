package chiselTests.util

import _root_.circt.stage.ChiselStage
import chisel3._
import chisel3.util.addAttribute
import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.matchers.should.Matchers

class AttributeAnnotationSpec extends AnyFlatSpec with Matchers {
  class AttributeExample extends Module {
    val io = IO(new Bundle {
      val input = Input(UInt(8.W))
      val output = Output(UInt(8.W))
    })

    val reg = RegNext(io.input)

    addAttribute(reg, "synthesis translate_off")

    io.output := reg
  }

  it should "generate corresponding SystemVerilog attributes" in {
    val verilog = ChiselStage.emitSystemVerilog(new AttributeExample)

    verilog should include("(* synthesis translate_off *)")
  }

  it should "generate corresponding SystemVerilog attributes for module" in {
    class foo extends RawModule {
      val io = IO(Output(UInt(8.W)))
      io := 0.U
      dontTouch(io)
    }
    class bar extends RawModule {
      val io = IO(Output(UInt(8.W)))

      val foo = Module(new foo)

      io := foo.io
      dontTouch(foo.io)

      addAttribute(foo, """keep_hierachy = "yes"""")
    }
    val verilog = ChiselStage.emitSystemVerilog(new bar)

    verilog should include("""(* keep_hierachy = "yes" *)""")
  }

}
