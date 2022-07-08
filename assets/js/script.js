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


/*

let score = 0;
let questions = [
    {
        prompt: "apple\n(a) noun\n(b) verb \n\(c) adjective",
        answer: "a"
    },
    {
        prompt: "rolled\n(a) noun\n(b) verb \n\(c) adjective",
        answer: "b"
    },
    
    {
        prompt: "round\n(a) noun\n(b) verb \n\(c) adjective",
        answer: "c"
    },

    ]

    for (i = 0; i < questions.length; i++) {
        let response = window.prompt(questions[i].prompt);
        if (response == questions[i].answer) {
            score++;
            alert("Correct! Well done :)");
        } else {
            alert("Try again");
        }
    }

    alert("You got " + score + "/" + questions.length); */