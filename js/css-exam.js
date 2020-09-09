'use strict';

 // array of questions
var q = [
    `How do you make a list that lists its items with squares?`,
    `Which of the following defines 1% of viewport height?`,
    ` __________ is a property that allows developers to add rounded corners on the design elements`,
    `How to rotate objects using CSS3?`,
    `How do you insert a comment in a CSS file?`,
    `Box-Shadow is a property that allows developers to apply a ....`,
    `What are the first three values of text-shadow in order?`,
    `How to force a word wrap using CSS3?`,
    `Which of the following selector matches the name of any element type?`,
    `How to re-size/scale objects using CSS3?`
]
// array of answers
var a = [
    [`list-style-type: square.`,`list-type: square.`,`list: square.`,`list.`],
    [`px.`,`vmin.`,`vw.`,`vh.`],
    [`Round Corner.`,`Box Shadow.`,`Border-Radius.`,`Corner.`],
    [`object-rotation: 30deg.`,`rotate-object: 30deg.`,`transform: rotate-30deg-clockwise.`,`transform: rotate(30deg).`],
    [`//this is a comment.`,`this is a comment.`,`/*this is a comment*/.`,`//this is a comment//.`],
    [`Border.`,`Rounded Corner.`,`Drop Shadow.`,`Background.`],
    [`vertical, horizontal, blur.`,`blur, vertical, horizontal.`,`horizontal, vertical, blur.`,`vertical, blur, horizontal.`],
    [`text-wrap: break-word.`,`word-wrap: break-word.`,`text-wrap: force.`,`text-width: set.`],
    [`The Type Selector.`,`The Universal Selector.`,`The Class Selector.`,`The Descendant Selector.`],
    [`scale-object: 2,4.`,`transform: scale(2,4).`,`scale: (2,4).`,`transform scale-object: 2,4.`]
]

var submit = document.getElementById("submit-exam");
submit.addEventListener('click',submitAnswers);
var form = document.getElementById('form');

allUsers= JSON.parse(localStorage.getItem('userScore'));
var currentUser = allUsers[allUsers.length -1];

randomInRange();

function randomInRange() { 
    for(let i = 0 ; i < 10 ; i ++) form.innerHTML += `<div><h3>${q[i]}</h3>${answersArray(a[i], i)}</div>`
}

function answersArray(ans, idx){
    let questionsChoices = ``, values = ['a', 'b', 'c', 'd'];
    for(let i=0; i< ans.length; i++){
        questionsChoices += `<input type="radio" name="q${idx}" value="${values[i]}" id="q${idx}${values[i]}">${ans[i]}<br>`     
    }
    return questionsChoices;
}

// correct answers
var answers = ["a","d","c","d","c","c","c","b","b","b"];
// full mark
var total = 10;
// initial user score
var score = 0;


function submitAnswers(e){
    e.preventDefault();

    // initial user answers
    var userAnswers = [];
    
    // get user input
    for(let i=0; i<10; i++) userAnswers.push(document.forms["quizForm"]["q"+i].value);

    // validation all inputs
    if(userAnswers.some(val => val == null || val == '')){    
        var noAnswer = document.getElementById("no-answers");
        noAnswer.setAttribute('style','display:block');
        setTimeout(() => {
            noAnswer.setAttribute('style','display:none');
        }, 3500)
        return;
    }

    // check user answers
    userAnswers.forEach((val,idx) => {
        if(val == answers[idx]) score++;
    })

    addScore();

    //Display Results
    var results = document.getElementById('results');
    results.innerHTML = `<h3>Result: You scored&nbsp; <span>${score}</span>&nbsp; out of &nbsp;<span>${total}&nbsp;</span></h3>`;
    var nextExam = document.getElementById("next-exam");
    nextExam.setAttribute('style','display:inline');
}

function addScore(){
    currentUser.cssScore = score;    
    localStorage.setItem('userScore',JSON.stringify(allUsers));
}
