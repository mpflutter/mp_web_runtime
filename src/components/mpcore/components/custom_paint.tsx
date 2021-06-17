import { PureComponent } from "react";
import App from "../../app";
import { MPComponentsProps } from "../component";
import { cssColor } from "../utils/color";
import { cssConstraints } from "../utils/geometry";

export class MPDrawable {
  static decodedDrawables: { [key: string]: HTMLImageElement } = {};

  static async decodeDrawable(params: any) {
    try {
      if (params.type === "networkImage") {
        const result = await this.decodeNetworkImage(params.url, params.target);
        App.callbackChannel(
          JSON.stringify({
            type: "decode_drawable",
            message: {
              event: "onDecode",
              target: params.target,
              width: result.width,
              height: result.height,
            },
          })
        );
      } else if (params.type === "memoryImage") {
        const result = await this.decodeMemoryImage(params.data, params.target);
        App.callbackChannel(
          JSON.stringify({
            type: "decode_drawable",
            message: {
              event: "onDecode",
              target: params.target,
              width: result.width,
              height: result.height,
            },
          })
        );
      } else {
        throw new Error("Unknown drawable type.");
      }
    } catch (error) {
      App.callbackChannel(
        JSON.stringify({
          type: "decode_drawable",
          message: {
            event: "onError",
            target: params.target,
            error: error?.toString(),
          },
        })
      );
    }
  }

  static async decodeNetworkImage(
    url: string,
    hashCode: number
  ): Promise<{ width: number; height: number }> {
    return new Promise((res, rej) => {
      const img = document.createElement("img");
      img.onload = function () {
        MPDrawable.decodedDrawables[hashCode] = img;
        res({ width: img.width, height: img.height });
      };
      img.onerror = function () {
        rej("");
      };
      img.src = url;
    });
  }

  static async decodeMemoryImage(
    data: string,
    hashCode: number
  ): Promise<{ width: number; height: number }> {
    return new Promise((res, rej) => {
      const img = document.createElement("img");
      img.onload = function () {
        MPDrawable.decodedDrawables[hashCode] = img;
        res({ width: img.width, height: img.height });
      };
      img.onerror = function () {
        rej("");
      };
      img.src = `data:text/plain;base64,${data}`;
    });
  }
}

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
        } else if (cmd.action === "drawImage") {
          this.drawImage(ctx, cmd);
        } else if (cmd.action === "drawImageRect") {
          this.drawImageRect(ctx, cmd);
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

  drawImage(ctx: CanvasRenderingContext2D, params: any) {
    this.setPaint(ctx, params.paint);
    const drawable = MPDrawable.decodedDrawables[params.drawable];
    if (drawable) {
      ctx.drawImage(drawable, params.dx, params.dy);
    }
  }

  drawImageRect(ctx: CanvasRenderingContext2D, params: any) {
    this.setPaint(ctx, params.paint);
    const drawable = MPDrawable.decodedDrawables[params.drawable];
    if (drawable) {
      ctx.drawImage(
        drawable,
        params.srcX,
        params.srcY,
        params.srcW,
        params.srcH,
        params.dstX,
        params.dstY,
        params.dstW,
        params.dstH
      );
    }
  }

  setPaint(ctx: CanvasRenderingContext2D, paint: any) {
    if (!paint) return;
    ctx.lineWidth = paint.strokeWidth;
    ctx.miterLimit = paint.strokeMiterLimit;
    ctx.lineCap = paint.strokeCap.replace("StrokeCap.", "");
    ctx.lineJoin = paint.strokeJoin.replace("StrokeJoin.", "");
    if (paint.style === "PaintingStyle.fill") {
      ctx.fillStyle = cssColor(paint.color);
      ctx.strokeStyle = "transparent";
    } else {
      ctx.fillStyle = "transparent";
      ctx.strokeStyle = cssColor(paint.color);
    }
    ctx.globalAlpha = paint.alpha ?? 1.0;
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
