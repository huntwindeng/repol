var express=require('express');
var fs=require('fs');
var Student=require('./student')
var router=express.Router();
console.log('_______________________')
// Students.updateById({id:1,
// 	name:'张小三'
// },function(err){
// 	if(err){
// 		return console.log('修改失败')
// 	}
// 	console.log('修改成功')
// })

router.get('/students',function(req,res){
	// fs.readFile('./db.json', 'utf-8', function(err, data) {
 //    if (err) {
 //        console.log('读取错误：' + err.message);
 //    }
 //       console.log('读取成功' + data);
 //       var students = JSON.parse(data).students;
	// 	res.render('index.html',{fruits:['苹果','香蕉','橘子'],
	// 		students:students})
		
	// })
console.log('_______________________')
	Student.find(function(err,students){
		if(err)
		{

		}
			res.render('index.html',{fruits:['苹果','香蕉','橘子'],
	 		students:students})
	})
})
router.get('/students/new',function(req,res){
res.render('new.html')
})
router.post('/students/new',function(req,res){
	//1.获取表单数据
	console.log(req.body);
	//2.处理数据,将数据保存到db.json文件中用以持久化
	//先读取出来，转成对象
	//然后网对象中push
	//转成字符串
	//字符串写入文件

	//3.发送响应
	var student=req.body;
	new Student(req.body).save(function(err){
		if(err){
			return res.status(500).send('server error')
		}
		res.redirect('/students')
	});
})
router.get('/students/edit',function(req,res){
	//1.在客户端的req.query.id(/"/g",'')正则全局替换双引号
	Student.findById(req.query.id,function(err,student){
		if(err){
			res.status(500).send('server error')
		}
		console.log(student)
		res.render('edit.html',{student:student})
	})

})
router.post('/students/edit',function(req,res){
	//1.获取数据 req.body
	Student.findByIdAndUpdate(req.body.id,req.body,function(err){
		if(err){
			return res.status(500).send('server errof')
		}
		res.redirect('/students')
	})

})
router.get('/students/delete',function(req,res){
console.log(req.query.id)
Student.findByIdAndRemove(req.query.id,function(err){
	if(err){
		return res.status(500).send('server error')
	}
	res.redirect('/students')
})
})

module.exports=router