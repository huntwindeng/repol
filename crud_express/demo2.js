console.log('copy成功');
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

//1.连接数据库
mongoose.connect('mongodb://localhost/itcast');
//设计集合结构（表结构）
// var blogSchema=new Schema({
//     title:String,
//     author:String,
//     body:String,
//     comment:[{body:String,date:Date}],
//     date:{type:Date,default:Date.now},
//     bidden:Boolean,
//     meta:{
//         votes:Number,
//         favs:Number
//     }
// });
//2.设计集合结构
var userSchema=new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String
    }    
})
//3.将文档结构发布为模型
var Users=mongoose.model('user',userSchema);

//4.增删改查
var admin=new Users({
    username:'admin',
    password:'123456',
    email:'admin@admin.com'
})
//保存
admin.save(function(err,ret){
    if(err){
        console.log('save error!');
    }
    else
    {
        console.log('保存成功');
        console.log(ret);
    }
});

