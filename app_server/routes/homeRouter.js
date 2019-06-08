var express=require('express');
var route=express.Router();
var ctrlHome=require('../controller/homeController');
route.get('/',ctrlHome.home);
module.exports=route;