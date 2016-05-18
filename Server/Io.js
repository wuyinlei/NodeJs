console.log('Hello');

//阻塞式
console.log('阻塞式循环开始');
var i = 10;
while (i > 0) {
    i--;
    console.log(i);
}
console.log('阻塞式循环结束');


//非阻塞式
console.log('非阻塞式循环开始');
setTimeout(function () {
    var i1 = 10;
    while (i1 > 0) {
        i1--;
        console.log(i1);
    }
}, 1);
console.log('非阻塞式循环结束');



