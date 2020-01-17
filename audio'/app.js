const Express = require('express');
const formidable = require('formidable');
var fs = require('fs');

const app = Express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/', (req, res) => {

   /* var form = new formidable.IncomingForm();
    form.uploadDir = "/my/dir";
    form.type='multipart';
    form.parse(req, function (err, fields, files) {
        var oldpath = files.audio_data.path;
        var newpath = './files' + files.filetoupload.name;
        fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;
            res.write('File uploaded and moved!');
            res.end();
        });
    }); */

    console.log(req);

    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        if(err) console.log(err);
      res.write('File uploaded');
      console.log(files);
      res.end();
    });
    
});

app.listen(5000, () => {
    console.log('listening');
})