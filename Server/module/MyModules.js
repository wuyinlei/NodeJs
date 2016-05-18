/**
 * Created by wuyin on 2016/5/18.
 * 第一种导出方式
 */
var name;
//暴漏出方法名  exports对象是当前模块的导出对象，
// 用于导出模块公有方法和属性。别的模块通过require函数
// 使用当前模块时得到的就是当前模块的exports对象。以下例子中导出了一个公有方法。
exports.setName = function (theName) {
    name = theName;
};

exports.sayHello = function () {
    console.log('Hello ,my name is ' + name);
};
