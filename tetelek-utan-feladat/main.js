import data from './data.json' with {type: 'json'};
import { Question } from "./question.js";
import { Quiz } from "./quiz.js";
import { UI } from "./ui.js";

const questions = data.questions.map(q =>
    new Question(q.question, q.answers, q.rightAnswer)
)

const quiz = new Quiz(questions)

function loadQuestion(){

    if(quiz.isFinished()){
        UI.showResult(quiz.score, quiz.questions.length)
        return
    }

    const q = quiz.getCurrentQuestion()

    UI.showQuestion(q)

    UI.showAnswers(q.answers, (answer)=>{

        quiz.answer(answer)
        loadQuestion()

    })
}

loadQuestion()