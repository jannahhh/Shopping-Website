var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
//const { urlencoded } = require('body-parser');
//const e = require('express');

//const Schema = mongo.Schema;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json);

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/',function(req,res){
  res.render('home',{title: "express"})
});

app.get('/registration',function(req,res){
  res.render('registration',{title: "express"})
});

//HomePage
app.get('/phones',function(req,res){
  res.render('phones',{title: "express"})
});
app.get('/books',function(req,res){
  res.render('books',{title: "express"})
});
app.get('/sports',function(req,res){
  res.render('sports',{title: "express"})
});
app.get('/cart',function(req,res){
  res.render('cart',{title: "express"})
});

//phones
app.get('/iphone',function(req,res){
  res.render('iphone',{title: "express"})
});

app.get('/iphone/cart',function(req,res){
  var iphone = "iphone";
});
app.get('/galaxy',function(req,res){
  res.render('galaxy',{title: "express"})
});

//books
app.get('/leaves',function(req,res){
  res.render('leaves',{title: "express"})
});
app.get('/sun',function(req,res){
  res.render('sun',{title: "express"})
});

//sports
app.get('/tennis',function(req,res){
  res.render('tennis',{title: "express"})
});
app.get('/boxing',function(req,res){
  res.render('boxing',{title: "express"})
});
 
// search 
app.get('/search',function(req,res){
  res.render('searchresults',{title: "express"})
});

app.listen(3501);

//Mongo atlas connection 
// async function main(){
//   var{MongoClient}=require('mongodb');
//   var url = "mongodb+srv://admin:admin@cluster0.1ujus.mongodb.net/cart?retryWrites=true&w=majority"
//   var client = new MongoClient(url,{useNewUrlParser: true , useUnifiedTopology: true });
//   await client.connect();
//   var user = {username: "user1" , password: "pass1"};
//   //await client.db('Users').collection("first collection").insertOne(user);
//   var output = await client.db('Users').collection("first collection").find().toArray();
//   //console.log(output);
//   client.close();
//   //var output = await client.db('Users').createCollection("first collection").find().toArray();
//   //console.log (output); 
// }
// main().catch(console.error);


// app.post('/login',function(req,res){
//   var data = req.body; 
//   if (err) console.log(err);
//   if ((output[0].username == data.username)&&output[0].password==data.password){
//     console.log("user exist");
//     alert("3ash")
//     res.render('home',{title: "express"})
//   }
//   else {console.log("user must register");
// alert("wrong username or password")} 
// });

