/**
 * Created by wuyin on 2016/5/18.
 */
var http = require('http');

/**
 * 控制路由的功能
 * @param path
 */
function rotuteHandle( request) {
    if (request.url == '/login' && request.method.toLowerCase() == 'post') {
        console.log('获取login的post请求');



        return 'post method';
    }

    return 'get method';
}

function onRequest(req, resp) {
    resp.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    var postData = '';

    if(req.url == '/login' && req.method.toLowerCase() == 'post'){
        req.addListener('data',function(data){
            postData +=data;
            console.log('获取post请求参数中。。。。')
        });

        req.addListener('end',function(){
            console.log(postData);
            console.log('获取post参数成功');
            resp.write('post');
            resp.end();
        })
    } else{
        resp.write('other method');
        resp.end();
    }


}

var server = http.createServer(onRequest);
server.listen(3000);
