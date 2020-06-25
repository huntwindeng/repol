/**
*student.js

*/
var fs=require('fs');

var dbPath='./db.json';
//return []
exports.find=function(callback){
	fs.readFile(dbPath,'utf-8',function(err,data){
		if(err){
			return callback(err);
		}
		callback(null,JSON.parse(data).students)
})
};
exports.save=function(student,callback){
	fs.readFile(dbPath,'utf-8',function(err,data){
		if(err){
			return callback(err);
		}
		var students=JSON.parse(data).students;
		student.id=students[students.length-1].id+1;
		//用户传递的对象保存到数组中
		students.push(student);
		//把对象转成字符串
		var fileData=JSON.stringify({
			students:students
		})
		fs.writeFile(dbPath,fileData,function(err){
			if(err){
				return callback(err);
			}
			//成功就没错，错误对象就是null
			callback(null);
		})
})
};
exports.updateById=function(student,callback){
	fs.readFile(dbPath,'utf-8',function(err,data){
		if(err){
			return callback(err);
		}
		var students=JSON.parse(data).students;
		//修改谁找谁,es6中的数组方法，函数作为参数
		//
		student.id=parseInt(student.id);
		var stu=students.find(function(item){
			return item.id===parseInt(student.id)
		})
		for(var key in student){
			stu[key]=student[key];
		}
		//把对象转成字符串
		var fileData=JSON.stringify({
			students:students
		})
		fs.writeFile(dbPath,fileData,function(err){
			if(err){
				return callback(err);
			}
			//成功就没错，错误对象就是null
			callback(null);
		})
	})

};

exports.findById=function(id,callback){
	fs.readFile(dbPath,'utf-8',function(err,data){
		if(err){
			return callback(err);
		}
		var students=JSON.parse(data).students;
		var ret=students.find(function(item){
			return item.id===parseInt(id);
		})
		callback(null,ret);
	})
};
exports.deleteById=function(id,callback){
	fs.readFile(dbPath,'utf-8',function(err,data){
		if(err){
			return callback(err);
		}
		var students=JSON.parse(data).students;
		var deleteId=students.findIndex(function(item){
			return item.id===parseInt(id)
		})
		students.splice(deleteId,1);
		//把对象转成字符串
		var fileData=JSON.stringify({
			students:students
		})
		fs.writeFile(dbPath,fileData,function(err){
			if(err){
				return callback(err);
			}
			//成功就没错，错误对象就是null
			callback(null);
		})
	})
};

