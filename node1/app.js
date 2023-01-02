var express=require("express");
var app=express();
app.get ("/",function (req,resp){
resp.sendFile();
})
app.listen(3000);
console.log("server is onn");

