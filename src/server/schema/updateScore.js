var mongoose=require('mongoose')
var UpdateScore=mongoose.Schema({
    username:String,
    quizName:String,
    correctAnswer:String,
    totalQuestions:String,
    time:String

})
var Score=mongoose.model('Score',UpdateScore,'scores')
module.exports=Score