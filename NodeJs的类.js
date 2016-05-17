function AppInfo(name) {
    // body...
    // this.appName = "微信";
    this.appName = name;
}

//AppInfo.prototype.appName = "购物商城";

var app = new AppInfo("商城");
console.log("appName" + app.appName);