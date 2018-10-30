var mongoose=require('mongoose')
var QuestionSchema=new mongoose.Schema({
    question:String,
    options:Array,
    answer:Number,
    quizType:String
})
var Questions= mongoose.model('Questions',QuestionSchema,'questions');
module.exports=Questions;