
var express=require('express');

var path=require('path');

var app=express();

app.use('/public',express.static(path.join(__dirname,'public')));

var homeController=function(req,res){
  res.sendFile(path.join(__dirname,'index.html'));
}

var loginController=function(req,res){
  res.sendFile(path.join(__dirname,'login.html'));
}

app.get('/',homeController);

app.get('/login',loginController);

app.listen(8000);
