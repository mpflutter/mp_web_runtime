interface MPJSMessage {
  event: string;
  requestId: string;
  params: any;
}

interface MPJSCallMethodParams {
  objectHandler: string;
  callChain: string[];
  method: string;
  args: any[];
}

interface MPJSGetValueParams {
  objectHandler: string;
  callChain: string[];
  key: string;
}

interface MPJSSetValueParams {
  objectHandler: string;
  callChain: string[];
  key: string;
  value: any;
}

export class MPJS {
  static instance = new MPJS();
  objectRefs: { [key: string]: any } = {};

  handleMessage(
    message: MPJSMessage,
    callback: (result: any) => void,
    funcCallback: (funcId: string, args: any[]) => void
  ) {
    if (message.event === "callMethod") {
      this.callMethod(message, callback, funcCallback);
    } else if (message.event === "getValue") {
      this.getValue(message, callback);
    } else if (message.event === "setValue") {
      this.setValue(message, callback);
    } else if (message.event === "hasProperty") {
      this.hasProperty(message, callback);
    } else if (message.event === "deleteProperty") {
      this.deleteProperty(message, callback);
    }
  }

  callMethod(
    message: MPJSMessage,
    callback: (result: any) => void,
    funcCallback: (funcId: string, args: any[]) => void
  ) {
    const params = message.params as MPJSCallMethodParams;
    const callingObject = this.getCallee(
      params.objectHandler,
      params.callChain
    );
    if (
      typeof callingObject === "object" ||
      typeof callingObject === "function"
    ) {
      try {
        const result = (callingObject[params.method] as Function).apply(
          callingObject,
          params.args?.map((it) => this.wrapArgument(it, funcCallback))
        );
        callback(this.wrapResult(result));
      } catch (error) {
        console.error(error);
      }
    }
  }

  getValue(message: MPJSMessage, callback: (result: any) => void) {
    const params = message.params as MPJSGetValueParams;
    const callingObject = this.getCallee(
      params.objectHandler,
      params.callChain
    );
    callback(this.wrapResult(callingObject[params.key]));
  }

  setValue(message: MPJSMessage, callback: (result: any) => void) {
    const params = message.params as MPJSSetValueParams;
    const callingObject = this.getCallee(
      params.objectHandler,
      params.callChain
    );
    callingObject[params.key] = params.value;
    callback(undefined);
  }

  hasProperty(message: MPJSMessage, callback: (result: any) => void) {
    const params = message.params as MPJSGetValueParams;
    const callingObject = this.getCallee(
      params.objectHandler,
      params.callChain
    );
    callback(
      this.wrapResult(callingObject && callingObject.hasOwnProperty(params.key))
    );
  }

  deleteProperty(message: MPJSMessage, callback: (result: any) => void) {
    const params = message.params as MPJSGetValueParams;
    const callingObject = this.getCallee(
      params.objectHandler,
      params.callChain
    );
    if (callingObject) {
      delete callingObject[params.key];
    }
    callback(1);
  }

  getCallee(objectHandler: string, callChain: string[]): any {
    const rootObject = this.objectRefs[objectHandler] ?? window;
    let currentObject: any = rootObject;
    for (let index = 0; index < callChain.length; index++) {
      const key = callChain[index] as any;
      currentObject = currentObject[key];
      if (currentObject === undefined || currentObject === null) {
        break;
      }
    }
    return currentObject;
  }

  wrapArgument(
    arg: any,
    funcCallback: (funcId: string, args: any[]) => void
  ): any {
    if (typeof arg === "string" && arg.startsWith("func:")) {
      const funcId = arg;
      const self = this;
      return function () {
        let cbArgs = [];
        for (let index = 0; index < arguments.length; index++) {
          const element = arguments[index];
          cbArgs.push(self.wrapResult(element));
        }
        funcCallback(funcId, cbArgs);
      };
    } else if (typeof arg === "string" && arg.startsWith("obj:")) {
      return this.objectRefs[arg.replace("obj:", "")];
    } else if (typeof arg === "object" && arg instanceof Array) {
      return arg.map((it) => this.wrapArgument(it, funcCallback));
    } else if (typeof arg === "object") {
      let newArgs: any = {};
      for (const key in arg) {
        newArgs[key] = this.wrapArgument(arg[key], funcCallback);
      }
      return newArgs;
    } else {
      return arg;
    }
  }

  wrapResult(result: any) {
    if (
      typeof result === "string" ||
      typeof result === "number" ||
      typeof result === "boolean" ||
      typeof result === "bigint"
    ) {
      return result;
    } else {
      const objectHandler = Math.random().toString();
      this.objectRefs[objectHandler] = result;
      return { objectHandler: objectHandler };
    }
  }
}
