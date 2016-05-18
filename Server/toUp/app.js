/**
 * Created by wuyin on 2016/5/18.
 */

var formidable = require('formidable');

var http = require('http');
var sys = require('util');

var server = http.createServer(function (req, resp) {

    if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
        console.log("upload request");
        uploadRequest(req, resp);
        return;
    }

    enterRequest(req, resp);
});
server.listen(3000);

function enterRequest(req, resp) {
    resp.writeHead(200, {
        'Content-type': 'text/html'
    })

    resp.end(
        '<form action="/upload" enctype="multipart/form-data" method="post">' +
        '<input type="text" name="title"><br>' +
        '<input type="file" name="upload" multiple="multiple"> <br>' +
        '<input type="submit" value="Upload Now">' +
        '</fomr>'
    )
}

/**
 *  处理上传的逻辑
 * @param req
 * @param resp
 */
function uploadRequest(req, resp) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        resp.writeHead(200, {
            'Content-type': 'text/plain'
        });
        resp.write('reviced upload file');
        resp.end(sys.inspect(
            {
                fields: files,
                files: files
            }
        ));
        /**
         * reviced upload file{ fields:
   { upload:
      File {
        domain: null,
        _events: {},
        _eventsCount: 0,
        _maxListeners: undefined,
        size: 13792,
        path: 'C:\\Users\\wuyin\\AppData\\Local\\Temp\\upload_13af36a9a1e0e1c66ac83370dad4324f',
        name: '计算机122毕设题目11.xlsx',
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        hash: null,
        lastModifiedDate: 2016-05-18T02:22:50.946Z,
        _writeStream: [Object] } },
  files:
   { upload:
      File {
        domain: null,
        _events: {},
        _eventsCount: 0,
        _maxListeners: undefined,
        size: 13792,
        path: 'C:\\Users\\wuyin\\AppData\\Local\\Temp\\upload_13af36a9a1e0e1c66ac83370dad4324f',
        name: '计算机122毕设题目11.xlsx',
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        hash: null,
        lastModifiedDate: 2016-05-18T02:22:50.946Z,
        _writeStream: [Object] } } }
         */

    })
}