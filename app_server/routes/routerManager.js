var routeLogin=require('./loginRouter.js');
var routeHome=require('./homeRouter.js');

module.exports=function(app){
    app.use('/login',routeLogin);
    app.use('/',routeHome);
}