var express=require('express')
var fs=require('fs')
var app=express()
var bodyParser=require('body-parser')
var router=require('./router')
app.use('/node_modules/',express.static('./node_modules/'))
app.use('/public/',express.static('./public/'))
app.engine('html',require('express-art-template'))
//配置模板引擎 bodyParser 要在挂载路由之前
app.use(bodyParser.urlencoded({extended:false}));
app.use(router);
//const fs = require('fs')

// app.get('/',function(req,res){
// 	//readFile 第二个参数 utf-8 data.tostring()xiaoguoyiyang 
// 	fs.readFile('./db.json', 'utf-8', function(err, data) {
//     if (err) {
//         console.log('读取错误：' + err.message);
//     }
//        console.log('读取成功' + data);
//        var students = JSON.parse(data).students;
// 		res.render('index.html',{fruits:['苹果','香蕉','橘子'],
// 			students:students})
		
// 	})
// 	console.log('haha');
// })
// 调用 fs.readFile 方法时，提供的第一个参数是相对路径，容易出现问题

fs.copyFile(__dirname + '/1.txt', __dirname + '/1-copy.txt', (err) => {
    if (err) return console.log(err.message)
    console.log('copy成功');
})
console.log(__dirname);
var path = require('path');

path.resolve(__dirname, '../__dirname');
console.log(__dirname);
fs.copyFile(__dirname + '/1.txt', __dirname + '/1-copy.txt', (err) => {
    if (err) return console.log(err.message)
    console.log('copy成功');
})
var path=path.join(__dirname , './1.txt');
	console.log(path);
var paths=path.split('\\');
console.log(paths);

app.listen(3001,function(){
	console.log('running 3000...');
})
module.exports=app
