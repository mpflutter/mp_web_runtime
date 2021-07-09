export class MethodChannelHandler {
  static installHandler() {
    (window as any).mp_core_methodChannelHandlerWebOnly = this.handler;
  }

  static async handler(
    method: string,
    beInvokeMethod: string,
    beInvokeParams: any,
    resultCallback: (jsonEncodedResult: string) => void
  ) {
    if (!Object.prototype.hasOwnProperty.call(window, method)) {
      resultCallback("NOTIMPLEMENTED");
      return;
    }
    if (!(typeof (window as any)[method][beInvokeMethod] === "function")) {
      resultCallback("NOTIMPLEMENTED");
      return;
    }
    try {
      let result = await (window as any)[method][beInvokeMethod](
        beInvokeParams
      );
      resultCallback(JSON.stringify(result));
    } catch (error) {
      resultCallback("ERROR:" + error);
    }
  }
}
