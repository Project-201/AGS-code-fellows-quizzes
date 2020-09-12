'use strict';

// full mark
var total = 10;
// initial user score
var score = 0;
// initial question
let q = [];
// initial user answers
var userAnswers = ['','','','','','','','','',''];

var choices = []

var submit = document.getElementById("submit-exam");
submit.addEventListener('click',submitAnswers);

fetch('./js/questions.json')
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        q = loadedQuestions.css;
        renderQuestions();
    })
    .catch((err) => {
        console.error(err);
    });

function renderQuestions() {
    for(let i = 0 ; i < q.length ; i ++) form.innerHTML += `
        <div>
            <h3>${q[i].question}</h3>
            ${renderOptions(q[i].options, i)}
        </div>`
    addEventForOptions()
}

function renderOptions(options, questionNumber){
    let questionsChoices = ``, values = ['A', 'B', 'C', 'D'];
    options.forEach((choice, idx) => {
        questionsChoices += `
        <div class="choice-container">
            <p class="choice-prefix">${values[idx]}</p>
            <p class="choice-text" data-questionnumber="${questionNumber}" data-value="${values[idx]}">${choice}</p>
        </div>`
    })
    return questionsChoices;
}

function addEventForOptions(){
    choices = document.querySelectorAll('.choice-text');
    choices.forEach((choice) => {
        choice.addEventListener('click', selectOption );
    });
}

function selectOption(e){
    e.preventDefault()
    const selectedChoice = e.target;
    const selectedAnswer = e.target.dataset;
    const questionContainer = e.target.parentElement.parentElement.querySelectorAll(".choice-container");

    if(userAnswers[selectedAnswer.questionnumber]){
        questionContainer.forEach(val => { val.classList.remove('selectedChoice') })
        userAnswers.splice(selectedAnswer.questionnumber, 1, '');
    }else{
        userAnswers.splice(selectedAnswer.questionnumber, 1, selectedAnswer.value);
        selectedChoice.parentElement.classList.add('selectedChoice');
    }
}

function submitAnswers(e){
    e.preventDefault();
    var noAnswer = document.getElementById("no-answers");

    // validation all inputs
    if(userAnswers.some(val => val == null || val == '')){    
        noAnswer.setAttribute('style','opacity:1');        
        return;
    }

    // remove all choices events
    choices.forEach((choice) => { 
        choice.removeEventListener('click', selectOption);
        choice.style.cursor = 'default';
    });

    // check user answers
    userAnswers.forEach((val, idx) => { if(val == q[idx].answer) score++; })

    //Display Results
    var results = document.getElementById('results');
    results.innerHTML = `<h3>Result: You scored&nbsp; <span>${score}</span>&nbsp; out of &nbsp;<span>${total}&nbsp;</span></h3>`;
    var nextExam = document.getElementById("next-exam");
    nextExam.setAttribute('style','display:inline');
    noAnswer.setAttribute('style','opacity:0');

    // add score to local storage
    addScore();
}

function addScore(){
    allUsers= JSON.parse(localStorage.getItem('userScore'));
    var currentUser = allUsers[allUsers.length -1];
    currentUser.cssScore = score;    
    localStorage.setItem('userScore',JSON.stringify(allUsers));

    // remove submit event
    submit.removeEventListener('click', submitAnswers);
    submit.style.cursor = 'default';
}
