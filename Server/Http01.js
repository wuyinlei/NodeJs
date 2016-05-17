/**
 * Created by wuyin on 2016/5/17.
 */
/**
 * 创建一个简易的HttpServer
 *
 * 双引号会搜索引号内的内容是不是有变量，有则输出其值，没有则输出原有内容。
 * 所以输出纯字符串的时候用单引号比双引号效率高，因为省去检索的过程。
 *
 *
 * 为什么搭建server这么简单？
 *
 * 因为底层工具方法强大，本身Node.js也是一个容器
 */
var httpServer = require('http');  //导入Node.js库中的http的库文件，并获得句柄
var server = httpServer.createServer(function (request, response) {
    console.log("Get An Client Request");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write('Hello World');
    response.end("OK");
    console.log("Request Response OK");
});

server.listen(3000);
console.log("hello");
