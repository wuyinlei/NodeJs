/**
 * Created by wuyin on 2016/5/18.
 */
var EventEmitter = process.EventEmitter;

var MyClass = function () {

};

MyClass.prototype.__proto__ = EventEmitter.prototype;