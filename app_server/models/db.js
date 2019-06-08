var mongoose=require('mongoose');

mongoose.Promise=require('bluebird');

//var mongoDB='mongodb://localhost/yenidb';
var mongoDB='mongodb://localhost:27017/YourDB", { useNewUrlParser: true }'
mongoose.connect("mongodb://localhost:27017/yenidb", { useNewUrlParser: true });