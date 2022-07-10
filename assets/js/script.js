const readyBtn = document.getElementById('ready-btn')
const nextFrame = document.getElementById('next-frame')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

readyBtn.addEventListener('click', startGame)
nextFrame.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  readyBtn.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextFrame.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextFrame.classList.remove('hide')
  } else {
    readyBtn.innerText = 'Restart'
    readyBtn.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'apple',
    answers: [
      { text: 'noun', correct: true },
      { text: 'adjective', correct: false},
      { text: 'verb', correct: false },
      { text: 'adverb', correct: false}
    ]
  },
  {
    question: 'tall',
    answers: [
      { text: 'noun', correct: false },
      { text: 'adjective', correct: true },
      { text: 'verb', correct: false },
      { text: 'adverb', correct: false }
    ]
  },
  {
    question: 'rolled',
    answers: [
      { text: 'noun', correct: false },
      { text: 'adjective', correct: false },
      { text: 'verb', correct: true },
      { text: 'adverb', correct: false }
      
    ]
  },
  {
    question: 'briskly',
    answers: [
      { text: 'adjective', correct: false },
      { text: 'noun', correct: false },
      { text: 'verb', correct: false },
      { text: 'adverb', correct: true }
      
    ]
  }
]