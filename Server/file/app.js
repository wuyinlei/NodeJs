/**
 * Created by wuyin on 2016/5/18.
 * Node.js中文件操作
 */
var fs = require('fs');
fs.readFile('a.txt','utf-8',function(err,data){   //异步的有回调
   if(err){
       console.error(err);
   }  else{
       console.log("不是同步的",data);
   }
});

console.log("app started..");   //文件读取数异步的可以看出

var rlt = fs.readFileSync('a.txt');   //同步的，没有回调函数，不过有返回的结果
console.log('rlt----->' + rlt);

console.log("ddf app started..");   //文件读取数异步的可以看出
