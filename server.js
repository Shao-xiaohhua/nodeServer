
var express = require('express');
var app = express();
app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html')
});
app.listen(18080,function(){
  console.log('express is lintening 18080 port');
});
var ara = [];
app.get('/text',function(req,res){
  ara.push({name:req.query.name,val:req.query.aa});
  res.jsonp(ara);
});
app.get('/fa',function(req,res){
  var bb = ara;
  res.jsonp(bb);
});
app.get('/rem',function (req,res){
  ara.splice(0,ara.length);
});
app.post('/file_upload', function (req, res) {

  console.log(req);  // 上传的文件信息
  console.log('接收成功');

})
app.get('/aa',function (req,res){
  console.log(1)
  res('行不行啊')
});
//相当于前台引入JS
//var con=mysql.createConnection({
//  host:'localhost',
//  port:'3306',
//  user:'root',
//  password:'',
//  database:'test'
//});
//app.use(express.static(__dirname+'/pulic/'));


//app.get('/',function(req,res){
//	res.sendFile(__dirname+'/index.html')
//});

//创建
//app.get('/getalluser',function(req,res){
//	con.query('select * from v9_category',function(err,result){
//		if(err) throw err;
//		res.jsonp(result);
//	})
//})
////删除
//app.get('/delete',function(req,res){
//	con.query('DELETE FROM v9_category WHERE catid=?',[req.query.aa],function(err,result){
//		if(err){
//			res.jsonp('false')
//		}else{
//			res.jsonp(req.query.aa)
//		}
//	})
//})
////添加
//app.get('/tianjia',function(req,res){
//	setTimeout(function(){	con.query('insert into v9_category set phone=?',[13],function(err,result){
//		if(err) throw err;
//		res.json(result.insertId);
//	})},700);
//
//})
////改
//app.get('/gaibian',function(req,res){
//	var a=pinyin(req.query.uname,{
//	style:pinyin.STYLE_NORMAL
//}).join(' ');
//	con.query('update v9_category set uname=?,phone=?,pinyin=? where uid=?',[req.query.uname,req.query.phone,a,req.query.uid],function(err,result){
//		if(err){
//			res.json('false')
//		}else{
//			res.json('true')
//		}
//	})
//})
//测试

