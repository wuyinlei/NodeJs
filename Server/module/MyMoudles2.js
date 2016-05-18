/**
 * Created by wuyin on 2016/5/18.
 * 第二种导出方式
 */

function Hello() {
    var name;

    this.setName = function (theName) {
        name = theName;
    }

    this.sayHello = function () {
        console.log(name);
    }
}

module.exports = Hello;