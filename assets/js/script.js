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

    alert("You got " + score + "/" + questions.length);