var express = require('express');
var app = express();
var router = express.Router();
  
var path = __dirname + '/public/';
  
app.use('/',router);
  
router.get('/',function(req, res){
  res.sendFile(path + '/views/index.html');
});
  
router.get('/product',function(req, res){
  res.sendFile(path + '/views/product.html');});
  
router.get('/checkout',function(req, res){
  res.sendFile(path + '/views/checkout.html');
});

router.get('/main.js',function(req, res){
  res.sendFile(path + '/scripts/main.js');
});
  
app.use('*',function(req, res){
  res.send('Error 404: Not Found!');
});
  
app.listen(3001,function(){
  console.log("Server running at Port 3001");
});
