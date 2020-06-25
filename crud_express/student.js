var mongoose=require('mongoose');
var Schema=mongoose.Schema;
//连接数据库
mongoose.connect('mongodb://localhost:27017/itcast')
var studentSchema=new Schema({
name:{type:String,
required:true},
gender:{
    type:Number,
    enum:[0,1],
    default:0
},
age:{
    type:Number
},
hobbies:
{
    type:String
}
})


//直接导出模型构造函数
var Students=mongoose.model('student',studentSchema);
module.exports=mongoose.model('student',studentSchema);
Students.find().then((result)=>{
    console.log(result+"-----------查询--------------")
    })