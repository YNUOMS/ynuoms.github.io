var os = function () {
    var ua = window.navigator.userAgent.toLowerCase(),
    isWechat = ua.match(/micromessenger\/([\d\.]+)/),
    isPc = ua.match(/windows/);
    return {
        isWechat: isWechat,
        isPc: isPc
    };
}();
if (!os.isWechat) {
    alert("请使用手机版微信打开！");
    console.log("User is Outside WeChat.");
    window.location.href="qrcode.html"
}
if (os.isPc){
    alert("请使用手机版微信打开！");
    console.log("User is using PC.");
    window.location.href="qrcode.html"
}
else {console.log("User is Inside WeChat.")}
