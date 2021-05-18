import { PureComponent } from "react";
import { MPComponentsProps } from "../component";
import { cssColor } from "../utils/color";
import { cssConstraints } from "../utils/geometry";

export class CustomPaint extends PureComponent<{ data: MPComponentsProps }> {
  setCanvasRef: any;

  theCanvas: HTMLCanvasElement | undefined;

  constructor(props: any) {
    super(props);
    this.setCanvasRef = (element: any) => {
      this.theCanvas = element;
      this.draw();
    };
  }

  componentDidUpdate() {
    this.draw();
  }

  draw() {
    if (this.theCanvas) {
      const ctx = this.theCanvas.getContext("2d");
      if (!ctx) return;
      ctx.save();
      (this.props.data.attributes.commands as any[]).forEach((cmd) => {
        if (cmd.action === "drawRect") {
          this.drawRect(ctx, cmd);
        } else if (cmd.action === "drawPath") {
          this.drawPath(ctx, cmd);
        } else if (cmd.action === "drawDRRect") {
          this.drawDRRect(ctx, cmd);
        } else if (cmd.action === "clipPath") {
          this.drawPath(ctx, cmd);
        } else if (cmd.action === "drawColor") {
          this.drawColor(ctx, cmd);
        } else if (cmd.action === "restore") {
          ctx.restore();
        } else if (cmd.action === "rotate") {
          ctx.rotate(cmd.radians);
        } else if (cmd.action === "save") {
          ctx.save();
        } else if (cmd.action === "scale") {
          ctx.scale(cmd.sx, cmd.sy);
        } else if (cmd.action === "skew") {
          ctx.transform(1.0, cmd.sy, cmd.sx, 1.0, 0.0, 0.0);
        } else if (cmd.action === "transform") {
          ctx.transform(cmd.a, cmd.b, cmd.c, cmd.d, cmd.tx, cmd.ty);
        } else if (cmd.action === "translate") {
          ctx.translate(cmd.dx, cmd.dy);
        }
      });
      ctx.restore();
    }
  }

  drawRect(ctx: CanvasRenderingContext2D, params: any) {
    this.setPaint(ctx, params.paint);
    if (params.paint.style === "PaintingStyle.fill") {
      ctx.fillRect(params.x, params.y, params.width, params.height);
    } else {
      ctx.strokeRect(params.x, params.y, params.width, params.height);
    }
  }

  drawPath(ctx: CanvasRenderingContext2D, params: any) {
    this.setPaint(ctx, params.paint);
    this.drawRealPath(ctx, params.path);
    if (params.action === "clipPath") {
      ctx.clip();
    } else if (params.paint.style === "PaintingStyle.fill") {
      ctx.fill();
    } else {
      ctx.stroke();
    }
  }

  drawDRRect(ctx: CanvasRenderingContext2D, params: any) {
    const offscreenCanvas = document.createElement("canvas");
    offscreenCanvas.width = ctx.canvas.width;
    offscreenCanvas.height = ctx.canvas.height;
    const offscreenContext = offscreenCanvas.getContext("2d")!;
    this.setPaint(offscreenContext, params.paint);
    this.drawRealPath(offscreenContext, params.outer);
    if (params.paint.style === "PaintingStyle.fill") {
      offscreenContext.fill();
    } else {
      offscreenContext.stroke();
    }
    offscreenContext.save();
    offscreenContext.fillStyle = "white";
    offscreenContext.globalCompositeOperation = "xor";
    this.drawRealPath(offscreenContext, params.inner);
    offscreenContext.fill();
    offscreenContext.restore();
    ctx.drawImage(offscreenCanvas, 0, 0);
  }

  drawRealPath(ctx: CanvasRenderingContext2D, path: any) {
    ctx.beginPath();
    (path.commands as any[]).forEach((it) => {
      if (it.action === "moveTo") {
        ctx.moveTo(it.x, it.y);
      } else if (it.action === "lineTo") {
        ctx.lineTo(it.x, it.y);
      } else if (it.action === "quadraticBezierTo") {
        ctx.quadraticCurveTo(it.x1, it.y1, it.x2, it.y2);
      } else if (it.action === "cubicTo") {
        ctx.bezierCurveTo(it.x1, it.y1, it.x2, it.y2, it.x3, it.y3);
      } else if (it.action === "arcTo") {
        ctx.ellipse(
          it.x,
          it.y,
          it.width / 2.0,
          it.height / 2.0,
          0,
          it.startAngle,
          it.startAngle + it.sweepAngle,
          it.sweepAngle < 0.0
        );
      } else if (it.action === "arcToPoint") {
        ctx.arcTo(
          it.arcControlX,
          it.arcControlY,
          it.arcEndX,
          it.arcEndY,
          it.radiusX
        );
      } else if (it.action === "close") {
        ctx.closePath();
      }
    });
  }

  drawColor(ctx: CanvasRenderingContext2D, params: any) {
    if (params.blendMode === "BlendMode.clear") {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    } else {
      ctx.fillStyle = cssColor(params.color);
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
  }

  setPaint(ctx: CanvasRenderingContext2D, paint: any) {
    if (!paint) return;
    ctx.lineWidth = paint.strokeWidth;
    ctx.miterLimit = paint.strokeMiterLimit;
    ctx.lineCap = paint.strokeCap.replace("StrokeCap.", "");
    ctx.lineJoin = paint.strokeCap.replace("StrokeJoin.", "");
    if (paint.style === "PaintingStyle.fill") {
      ctx.fillStyle = cssColor(paint.color);
      ctx.strokeStyle = "transparent";
    } else {
      ctx.fillStyle = "transparent";
      ctx.strokeStyle = cssColor(paint.color);
    }
  }

  render() {
    return (
      <canvas
        ref={this.setCanvasRef}
        width={this.props.data.attributes.width}
        height={this.props.data.attributes.height}
        style={{
          ...cssConstraints(this.props.data.constraints),
        }}
      ></canvas>
    );
  }
}
