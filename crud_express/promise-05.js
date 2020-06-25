var fs=require('fs');
const { rejects } = require('assert');
const { resolve } = require('path');

console.log(1);

var p1=new Promise(function(){
    //console.log(2);
    fs.readFile('./2.txt','utf8',function(err,data){
        if(err){
            //console.log(err)
            reject(err);
        }
        else{
            // console.log(3);
            // console.log(data);
            resolve(data);
        }

    })
});
p1.then(function (data){
    console.log(data);
},function(err){console.log('error')
});
// console.log(4);
