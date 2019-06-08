/// ilk ders

var http=require('http');

var fs=require('fs');

var yonlendirici=new Object();

var loginController=function(req,res){
  fs.readFile('login.html',function(err,data){
    res.write(data);
    res.end('mesaj gitti');
  });
}

var homeController=function(req,res){
  fs.readFile('index.html',function(err,data){
    res.write(data);
    res.write('Nodemon Harika<br>');
    res.end('mesaj gitti');
  });
}

yonlendirici['/']=homeController;
yonlendirici['/login']=loginController;

var server=http.createServer(function(req,res){

 if(req.url in yonlendirici)
 yonlendirici[req.url](req,res);
  
  console.log(req.url);

  //res.write('<h1>Merhabalar11</h1>');
  
}).listen(8000);


/* 
node app.js
localhost:8000
ctrl+c stp
server.listen(8000)
*/
