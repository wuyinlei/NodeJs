/**
 * Created by wuyin on 2016/5/17.
 */
var http = require('http');

var url = require('url');

var queryString = require('querystring'); //解析参数的库
var server = http.createServer(onRequest);
server.listen(3000);

/**
 * 获取客户端请求的回调函数
 * @param res
 * @param resp
 */
function onRequest(res, resp) {

    //console.log("res",res.url);   //会输出两个/      /favicon.ico

    //var parseUrl = url.parse(res.url).query;  //获取到的null
    //console.log(parseUrl);

    //第一种方式利用querystring模块的方式获取参数的方法
    var arg = url.parse(res.url).query;

    //console.log("arg",arg);
    var nameValue = queryString.parse(arg)['name'];
    console.log("name:",nameValue);
    console.log("======================================");

    //第二种利用url模块的方式获取参数的方法
    var arg2 = url.parse(res.url,true).query;
    console.log("arg2:",arg2);
    console.log("arg2.name",arg2.name);
    console.log("arg2.age",arg2.age);



    resp.writeHead(200, {"Content-Type": "text/plain"});
    resp.write("Hello World");
    resp.end();
}