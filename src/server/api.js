var express=require('express')
var bodyParser=require('body-parser')
var mongoose=require('mongoose')
var cors=require('cors')
var url=require('url')

var app=express()
app.use(bodyParser.json())
app.use(cors())
mongoose.connect('mongodb://127.0.0.1:27017/OnlineQuiz',err=>{
    if(err)
        console.error("Error"+err)
    else
        console.log("MongoDB Connected")
})
var User=require('./schema/users')
var Question=require('./schema/programming_questions')
var Score=require('./schema/updateScore')
app.post('/register',function(req,res){
    console.log("POST Request")
    var userData=req.body
    var user=new User(userData)
    user.save((err,registeredUser)=>{
        if(err)
            console.log(err)
        else
            res.status(200).send(registeredUser)
    })
})
app.post('/login',function(req,res){
    //console.log("POST Request For Login")
    var userData=req.body
    //console.log(userData)
    User.findOne({username:userData.username},(erro,user)=>{
        if(erro)
            console.log(erro)
        else
        {
            if(!user)
            {
                res.send(user)
                // res.status(401).send('Invalid Username')
            }
            else if(user.password!=userData.password)
            {
                res.send(user)
                //res.status(401).send('Invalid Password')
            }
            else
            {
                res.status(200).send(user)
            }
        }
    })
})
app.get('/quiz',function(req,res){
    console.log(req.query.quizType)
    var questions=Question.find({quizType:req.query.quizType}).then(function(ques){
        res.send(ques)
        
        console.log(ques);
    })
})
app.post('/updateScore',function(req,res){
    console.log('POST Request')
    var score=req.body
    console.log(score)
    var update=new Score(score)
    console.log(update)
    update.save((err,updated)=>{
        if(err)
            res.status(401).send('Not uploaded')
        else
        {
            res.status(200).send(updated)
        }
    })
})
var MongoClient=require('mongodb').MongoClient

app.get('/dashboard',function(req,res){
    var username1=req.query.username
    MongoClient.connect('mongodb://127.0.0.1:27017/',function(err,db){
        if(err)
            throw err
        var dbo=db.db("OnlineQuiz")
        dbo.collection("scores").find({username:username1}).toArray(function(err,data){
            res.status(200).send(data)
        db.close()
        })
    })
})
app.listen(8081,()=>console.log("Server listening at 8081"))