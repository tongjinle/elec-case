/** web和native的通信协议 */

(function() {
  /**
   * web向native发起的请求的事件,枚举为拍摄,扫码,页面跳转和打印
   */
  const events = {
    takePhoto: "takePhoto",
    scan: "scan",
    navigateBack: "navigateBack",
    print: "print"
  };

  /** */

  /**
   *
   * @param {string} name 枚举为拍摄,扫码,页面跳转和打印
   * @param {object} args 相关参数
   * @param {function} callback 回调函数
   */
  function sendToNative(name, args, callback) {
    if (name === events.takePhoto) {
      takePhoto(callback);
    } else if (name === events.scan) {
      scan(callback);
    } else if (name === events.navigateBack) {
      navigateBack(args.url);
    } else if (name === events.print) {
      print();
    }
  }

  // callback签名:
  // callback(obj),obj为从native出来的参数,是一个Object类型
  // 不同的函数,有着自己具体的类型

  // callback中的obj类型:
  // {url:string}
  function takePhoto(callback) {
    // todo
  }

  // callback中的obj类型:
  // 具体要问需求
  function scan(callback) {
    // todo
  }

  // url为要按pad后退键所要跳转的页面
  function navigateBack(url) {
    // todo
  }

  // 打印当前页面
  function print() {
    // todo
  }

  this.__sendToNative = sendToNative;
}.call(window));
