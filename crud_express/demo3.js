//npm安装依赖包后、导入mongoose
console.log('cg');
var mongoose = require('mongoose');
//连接本地的mongodb数据库stu
mongoose.connect('mongodb://127.0.0.1:27017');
var db = mongoose.connection
db.on('error',function(){
    console.log("数据库连接出错")
}

)
console.log('cg');
 
//生成一个Schema,相当于student集合的一个映射,里面定义字段名和类型，并关联对应的集合student
let stuSchema = mongoose.Schema({
	name: String,
	age: Number
},{collection:'student'})
 
//根据Schema生成一个model,model就是对数据库增删改查的对象,model里面提供了很多方法来对数据库进行操作
let stuModel = mongoose.model('stu',stuSchema)
 
//插入语句,需要对定义的字段赋值来构造一个model实例化对象,然后调用save方法插入
let stu = new stuModel({
	name:'xyj',
	age:23
})
stu.save(function(err){
 console.log(err);//传入一个回调函数，接受返回值
})

