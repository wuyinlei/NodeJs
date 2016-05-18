/**
 * Created by wuyin on 2016/5/18.
 */
/**
 * 在Node.js中如何注册一个事件
 */

var EventEmitter = require('events').EventEmitter;

var a = new EventEmitter;
/**
 * Event模块（events.EventEmitter）是一个简单的事件监听
 * 器模式的实现。具有addListener/on，once，removeListener，
 * removeAllListeners，emit等基本的事件监听模式的方法实现。
 * 它与前端DOM树上的事件并不相同，因为它不存在冒泡，逐层捕获等属于
 * DOM的事件行为，也没有preventDefault()、stopPropagation()、
 * stopImmediatePropagation() 等处理事件传递的方法。
 */

a.on('myEvent', function () {
    console.log('event called ....')
});


process.nextTick(function () {
    a.emit('myEvent');   //接受器
});

console.log('ddfdddddd');

var MyClass = require('./Test');

var aa = new MyClass;
aa.on('admin', function () {

});