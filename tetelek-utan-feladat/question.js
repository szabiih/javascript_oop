class Question {
    constructor(question, answers, rightAnswer){
        this.question = question
        this.answers = answers
        this.rightAnswer = rightAnswer
    }

    isCorrect(answer){
        return answer === this.rightAnswer
    }
}

export {Question}