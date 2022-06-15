var express = require('express');
var app = express();
var logger = require('morgan')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"
var path = require('path')
var bodyparser = require('body-parser')


app.use(logger('dev'))

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyparser.urlencoded({extended:false }))



app.get('/',(req,res)=>{
    res.send("public ,mon")
    console.log('call recived');
});

app.get('/comments',(req,res)=>{ 
  console.log('Git reqest recived at comment.');  
    MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
   var dbo = db.db('able')
   dbo.collection('user').find({}).toArray(function(err,data){
    if(err) throw err;
    console.log('Data :'+data.name);  
    res.send(data);
    db.close();  
  });
});
    
});

app.post('/comments',(req,res)=>{
    var myObj = req.body;
    MongoClient.connect(url,(err,db)=>{   
    var dbo = db.db('able')
    dbo.collection('user').insertOne(myObj,(err)=>{
    if(err) throw err;
    res.status(200).redirect('hello.html')
   });
   }); 

});
var PORT = 3000
app.listen(PORT,()=>{
    console.log('running on port'+PORT);
})

