const mongoose = require("mongoose");
const data_url = "mongodb://127.0.0.1:27017/mongodb";//定义数据库地址
mongoose.connect(data_url,(err,client)=>{
if(err){
console.log("连接失败")
}else{
console.log("连接成功")
}
})
//连接表并定义字段
const Users = mongoose.model("user",{
name:String,
age:String,
sex:String
})
// const users = new Users({
// name:"胡歌",
// age:26,
// sex:"男"
// })
// const users=
// new Users({
//     name:"胡歌",
//     age:26,
//     sex:"男"
//     })
// //添加数据
// users.save().then((result)=>{
// console.log(result+"-----------添加--------------")
// })

//     //修改数据
//     users.update({name:"胡歌",age:26},{$set:{name:"胡歌神",$age:22}}).then((result)=>{
//     console.log(result+"-----------修改--------------")
//     })
    //删除数据
// Users.remove({name:"胡歌神"}).then((result)=>{
//     console.log(result+"-----------删除--------------")
//     })
    //查询数据
    
    // Users.find().then((result)=>{
    // console.log(result+"-----------查询--------------")
    // })
    Users.find().then(function(data){
        console.log(data)
    })
    