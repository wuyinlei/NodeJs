/**
 * Created by wuyin on 2016/5/18.
 */
var http = require('http');

var mysql = require('mysql');

var connection = mysql.createConnection({
    user: "root",
    password: "root",
    database: "mydb"
});

var server = http.createServer(function (request, response) {
    //server端获取到请求之后，返回数据库中的数据

    connection.query('select * from stu;', function (err, rows, fileds) {

        response.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        response.end(JSON.stringify(rows));

    });

});

server.listen(3000);

//以下是获取的数据
/**
 * [
 {
 id: 1,
 name: "张无忌",
 sex: "男",
 age: 20,
 address: "北京"
 },
 {
 id: 2,
 name: "小龙女",
 sex: "女",
 age: 18,
 address: "古墓"
 },
 {
 id: 3,
 name: "黄蓉",
 sex: "女",
 age: 15,
 address: "桃花岛"
 },
 {
 id: 4,
 name: "韦小宝",
 sex: "男",
 age: 24,
 address: "扬州"
 },
 {
 id: 5,
 name: "乔峰",
 sex: "男",
 age: 34,
 address: "雁门关"
 },
 {
 id: 6,
 name: "张果老",
 sex: "男",
 age: 30,
 address: "雁门关"
 },
 {
 id: 7,
 name: "老张",
 sex: "男",
 age: 38,
 address: "黒木崖"
 },
 {
 id: 8,
 name: "张",
 sex: "男",
 age: 34,
 address: "桃花岛"
 },
 {
 id: 10,
 name: "令狐冲",
 sex: "男",
 age: 27,
 address: "北京"
 }
 ]
 */