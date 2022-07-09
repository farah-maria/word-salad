const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));


let currentQuestion = {}
let acceptingAnswers = true
let availableQuestions = []

let questions = [
    {
        question: "apple",
        choice1: "noun",
        choice2: "adjective",
        choice3: "verb",
        choice4: "adverb",
        answer: 1,
    },
    {
        question:"round",
        choice1: "noun",
        choice2: "adjective",
        choice3: "verb",
        choice4: "adverb",
        answer: 2,
    },
    {
        question: "quickly",
        choice1: "noun",
        choice2: "adjective",
        choice3: "verb",
        choice4: "adverb",
        answer: 4,
    },
    {
        question: "rolled",
        choice1: "noun",
        choice2: "adjective",
        choice3: "verb",
        choice4: "adverb",
        answer: 3,
    }
]

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    acceptingAnswers = true


    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true


choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })})