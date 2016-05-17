/**
 * Created by wuyin on 2016/5/17.
 * 演示如歌处理请求的路由
 * 在Node.js中处理路由的方法需要利用request.url获取客户端的请求来判断
 */
var http = require('http');

/**
 * 处理请求的方法
 * @param request
 * @param response
 */

function doRequest(request, response) {

    var requestPath = request.url;

    console.log("请求的路径是==>", requestPath);
    /**
     * 1、请求 /index  (默认)
     * 2、请求   login
     * 3、请求    register
     *
     */

        // 发送 HTTP 头部
        // HTTP 状态值: 200 : OK
        // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    //response.setEncoding("utf-8");

    var responseContent = rotuteHander(requestPath);

    response.write(responseContent);

    // 发送响应数据 "Hello World"
    response.end();

}

var handlePaths = [];

/**
 * 初始化路由
 */
function initRotute() {
    handlePaths.push('/');
    handlePaths.push('/login');
    handlePaths.push('/register');
}

/**
 * 处理路由的逻辑
 * @param path
 */
function rotuteHander(path) {
    for (var i in handlePaths) {
        handlePaths[i];
        if (handlePaths[i] == path) {
            console.log('获取到相同的路由信息：', handlePaths[i]);
            return "request rotute is : " + handlePaths[i];
        }
    }
    return "404 not Found";
}

http.createServer(doRequest).listen(3000);

initRotute();

console.log("Server is Running...");