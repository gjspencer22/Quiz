const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
    ('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById
    ('answer-buttons')

let shuffledQuestions, currentQuestionIndex
var quizRunning = false;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})



function startGame() {
    quizRunning = true;
    startButton.classList.add('hide')
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


var count = 100;
var quizRunning = false

var interval = setInterval(function () {
    if (quizRunning) {  //the interval will keep running... but this function won't DO anything until we set quizRunning to true!
        document.getElementById('count').innerHTML = "Time left:" + count;
        count--;
        if (count <= 0) {
            clearInterval(interval);
            document.getElementById('count').innerHTML = 'Out of time!';
            alert("You're out of time!");
        }
    }
}, 1000);


function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
            document.getElementById("answer").textContent = ""
            
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
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    nextButton.classList.remove('hide')
}

function correctAnswer() {
   
    document.getElementById("answer").textContent = "Correct!"
}
function incorrect() {
    document.getElementById("answer").textContent = ""
    document.getElementById("answer").textContent = "Incorrect! :("
    count = count - 1;
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct'),
            correctAnswer();
    }
    else {
        element.classList.add('wrong')
        incorrect();
    }
    function clearStatusClass(element) {
        element.classList.remove('correct')
        element.classList.remove('wrong')
    }

}
const questions = [
    {
        question: 'Arrays in Javascript can be used to store what?',
        answers: [
            { text: 'Booleans', correct: false },
            { text: 'Numbers and Strings', correct: false },
            { text: 'Arrays', correct: false },
            { text: 'All of the Above', correct: true }

        ]
    }
    // {
    //     question: 'Inside which HTML element do we put the JavaScript?',
    //     answers: [

    //         { text: '<scripting>', correct: false },
    //         { text: '<script>', correct: true },
    //         { text: '<style>', correct: false },
    //         { text: '<muffins>', correct: false }

    //     ]
    // },

    // {
    //     question: 'How do you create a function in JavaScript?',
    //     answers: [
    //         { text: 'function myFunction()', correct: true },
    //         { text: 'function = myFunction()', correct: false },
    //         { text: 'function: myFunction()', correct: false },
    //         { text: 'function> myFunction()', correct: false }
    //     ]
    // },


]
const lastQuestion = questions.length - 1;

score = count;
console.log(score);


// function endGame{

// }