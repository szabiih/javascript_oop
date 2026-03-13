class Quiz{
    constructor(questions){
        this.questions = questions
        this.currentIndex = 0
        this.score = 0
    }

    getCurrentQuestion(){
        return this.questions[this.currentIndex]
    }

    answer(answer){
        const q = this.getCurrentQuestion()

        if(q.isCorrect(answer)){
            this.score++
        }

        this.currentIndex++
    }

    isFinished(){
        return this.currentIndex >= this.questions.length
    }
}

export {Quiz}