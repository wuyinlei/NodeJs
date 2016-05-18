/**
 * Created by wuyin on 2016/5/18.
 */
var http = require('http');
var qs = require('querystring');

/**
 * 控制路由的功能
 * @param path
 */
function rotuteHandle(request) {
    if (request.url == '/login' && request.method.toLowerCase() == 'post') {
        console.log('获取login的post请求');


        return 'post method';
    }

    return 'get method';
}

/**
 * 处理请求的方法
 * @param req
 * @param resp
 */
function onRequest(req, resp) {
    resp.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    var postData = '';

    if (req.url == '/login' && req.method.toLowerCase() == 'post') {

        /**
         * 在Node.js中处理Post请求与Get请求的方式不同，需要单独的处理不像Get可以直接获取
         * 需要注册两个listener来实现，分别是data和end的两个listener
         * ```
         request.addListener('data',function);
         request.addListener('end',function);
         ```
         */
        req.addListener('data', function (data) {
            postData += data;
            console.log('获取post请求参数中。。。。')
        });

        req.addListener('end', function () {
            console.log(postData);
            console.log('获取post参数成功');

            var content = qs.parse(postData).text;

            resp.write(content);
            resp.end();
        })
    } else {
        resp.write('other method');
        resp.end();
    }


}

var server = http.createServer(onRequest);
server.listen(3000);
