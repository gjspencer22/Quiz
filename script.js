const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
    ('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById
    ('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


// let scoresDiv = document.getElementById("scores-div");

// function setTime() {
//     displayQuestions();
//     let timerInterval = setInterval(function () {
//         secondsLeft--;
//         timer.textContent = "";
//         timer.textContent = "Time: " + secondsLeft;
//         if (secondsLeft <= 0 || questionCount === questions.length) {
//             clearInterval(timerInterval);
//             captureUserScore();
//         }
//     }, 1000);
// }


function correct() {
    document.getElementById("answer").textContent ="Correct!"
}
function incorrect() {
    document.getElementById("answer").textContent ="Incorrect! :("
    count = count -1;
}


function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    // setInterval();
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
var btn = document.getElementById('start-btn');


    btn.addEventListener("click", function () {
        document.getElementById('count').innerHTML = "Time left:" + count;
    count--;
    if (count <= 0) {
        clearInterval(interval);
        document.getElementById('count').innerHTML = 'Out of time!';
        alert("You're out of time!");
     }
    }, 1000);


// var interval = setInterval(function () {
    
//     document.getElementById('count').innerHTML = "Time left:" + count;
//     count--;
//     if (count <= 0) {
//         clearInterval(interval);
//         document.getElementById('count').innerHTML = 'Out of time!';
//         alert("You're out of time!");
//     }
// }, 1000);




function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
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


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        correct();
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
    },
    {
        question: 'HTML is a graphical design tool used to develop web pages that are displayed with a browser.',
        answers: [

            { text: 'True', correct: false },
            { text: 'False', correct: true }

        ]
    },

    {
        question: 'What is 3+2?',
        answers: [
            { text: '5', correct: true },
            { text: '22', correct: false }
        ]
    },


]
const lastQuestion = questions.length - 1;

score = count; 
console.log(score);


// function endGame{

// }