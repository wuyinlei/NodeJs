/**
 * Created by wuyin on 2016/5/18.
 */
var myMo = require('./MyModules');
myMo.setName("wuyinlei");
//myMo.sayHello();

var myMo1 = require('./MyModules');
myMo1.setName('dasf');
myMo.sayHello();  //Hello ,my name is dasf   这个可以看到这两个myMo和myMo1是用的是一个实例

var myMo2 = require('./MyMoudles2');

var hello = new myMo2();
hello.setName('ok');
hello.sayHello();