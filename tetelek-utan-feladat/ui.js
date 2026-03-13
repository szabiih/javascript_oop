class UI{

    static showQuestion(question){
        document.querySelector(".question").innerText = question.question
    }

    static showAnswers(answers, callback){

        const container = document.querySelector(".answers")
        container.innerHTML = ""

        answers.forEach(answer => {

            const btn = document.createElement("button")
            btn.innerText = answer

            btn.onclick = () => callback(answer)

            container.appendChild(btn)
        })
    }

    static showResult(score, total){

        document.querySelector(".question").innerText = "Eredmény"
        document.querySelector(".answers").innerHTML = ""
        document.querySelector(".result").innerText =
            `${score} / ${total} helyes válasz`
    }
}

export {UI}