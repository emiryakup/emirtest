
var express=require('express');
var path=require('path');
var app=express();
var ejsLayouts=require('express-ejs-layouts');

var parser=require('body-parser');
var db=require('./app_server/models/db');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'app_server/views'));

app.use('/public',express.static(path.join(__dirname,'public')));
app.use(parser.urlencoded({extended:false}));
app.use(parser.json());

app.use(ejsLayouts);
require('./app_server/routes/routerManager')(app);

var kullanici=require('./app_server/models/kullanici');

/*var yeniKullanici=new kullanici({
    ad:'Emir',
    soyad:'Yakup',
    kullaniciAdi:'emirykp',
    sifre:'123456'
});*/

/*yeniKullanici.save(function(err){
    if(err){
        console.log('Hata var: '+err);
    } else {
        console.log('Başarılı');
    }
});*/


app.listen(8000);
