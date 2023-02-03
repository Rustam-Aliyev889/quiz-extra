const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progresBarFull = document.querySelector("#progressBarFull");
const timeCount = document.querySelector(".timer .timer_sec");

let currentQuestion = {};

let = acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "How many rings does the Audi logo have?",
        choice1: "11",
        choice2: "2",
        choice3: "4",
        choice4: "6",
        answer: 3,
    },
    {
        question: "Where is Mercedes-Benz manufactured?",
        choice1: "Italy",
        choice2: "Germany",
        choice3: "Mexico",
        choice4: "Mongolia",
        answer: 2,
    },
    {
        question: "Which animal features in the logo for Lamborghini?",
        choice1: "Bull",
        choice2: "Weasel",
        choice3: "Horse",
        choice4: "Cat",
        answer: 1,
    },
    {
        question: "What was the original color for all Ferrari models?",
        choice1: "Blue",
        choice2: "White",
        choice3: "Red",
        choice4: "Black",
        answer: 3,
    },
    {
        question: "What is the world’s all-time best selling car?",
        choice1: "BMW 3",
        choice2: "Ford Focus",
        choice3: "WV Golf",
        choice4: "Toyota Corolla",
        answer: 4,
    },
    {
        question: "Which sports car features in the Back To The Future trilogy?",
        choice1: "DeLorean",
        choice2: "Ferrari",
        choice3: "Lamborghini",
        choice4: "Porsche",
        answer: 1,
    },
    {
        question: "What is the car driven by Mr Bean, the hapless character played by Rowan Atkinson?",
        choice1: "Aston Martin",
        choice2: "A Mini",
        choice3: "Ford Fiesta",
        choice4: "Fiat 500",
        answer: 2,
    },
    {
        question: "What is the oldest car company still in business today?",
        choice1: "Opel",
        choice2: "Ford",
        choice3: "Mercedes-Benz",
        choice4: "Peugeot",
        answer: 4,
    },
    {
        question: "What is the most popular color for a car?",
        choice1: "Black",
        choice2: "White",
        choice3: "Grey",
        choice4: "Blue",
        answer: 2,
    },
    {
        question: " What kind of car is associated with James Bond?",
        choice1: "Porsche",
        choice2: "Ferrari",
        choice3: "Aston Martin",
        choice4: "Bentley",
        answer: 3,
    },
    {
        question: "Which iconic car manufacturer also made airplane engines?",
        choice1: "Rolls Royce",
        choice2: "Mercedes-Benz",
        choice3: "BMW",
        choice4: "Chrysler",
        answer: 1,
    },
    {
        question: "In which year did Henry Ford establish the Ford Motor Company?",
        choice1: "1901",
        choice2: "1903",
        choice3: "1879",
        choice4: "1925",
        answer: 3,
    },
    {
        question: "Which race car is known as the widow maker?",
        choice1: "Ford GT40",
        choice2: "Audi Quattro",
        choice3: "Ferrari 330 P4",
        choice4: "Porsche 917",
        answer: 4,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 13
let counter = 0;
let timeValue = 15;

startGame = () => {
    startTimer(3)
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
    
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score)
        return window.location.assign("end.html")
    }
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progresBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset["number"]
        choice.innerText = currentQuestion["choice" + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        
        if(classToApply ==='correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()

function startTimer (time) {
    counter = setInterval(timer, 1000)
    function timer() {
        timeCount.textContent = time;
        time--;
        if(time === 0) {
            clearInterval(timeCount)
        }
    }
}
  
