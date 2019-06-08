var express=require('express');
var router=express.Router();

var ctrlLogin=require('../controller/loginController');

router.get('/',ctrlLogin.index);

router.post('/',ctrlLogin.indexPost);

router.get('/signup',ctrlLogin.signupGet);

router.post('/signup',ctrlLogin.signupPost);

router.get('/kullanicilarListesi',ctrlLogin.kullanicilarListesi);

router.get('/kullaniciSil/:kullaniciAdi',ctrlLogin.kullaniciSil);

module.exports=router;