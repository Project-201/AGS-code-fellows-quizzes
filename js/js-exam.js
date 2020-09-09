'use strict';

// array of questions
var q = [
    `Which is the correct way to write a JavaScript array?`,
    `Which of the following is correct to write “Hello World” on the web page?`,
    `How would you write "Hello" in an alert box?`,
    `A variable in javascript must start with which spcial character?`,
    `Which of the following method is used to evaluate a string of Java Script code in the context of the specified object?`,
    `How do you round the number 7.25, to the nearest integer?`,
    `How do you find the number with the highest value of x and y?`,
    `Which event occurs when the user clicks on an HTML element?`,
    `Which operator is used to assign a value to a variable?`,
    `What will the following code return: Boolean(10 > 9)`
]
// array of answers
var a = [
    [`var txt = new Array(1:"arr",2:"kim",3:"jim").`,`var txt = new Array("arr ","kim","jim").`,`var txt = new Array:1=(" arr ")2=("kim")3=("jim").`,`var txt = new Array=" arr ","kim","jim".`],
    [`System.out.println(“Hello World”).`,`document.write(“Hello World”).`,`print(“Hello World”).`,`response.write(“Hello World”).`],
    [`msg("Hello").`,`alertbox("Hello").`,`print("Hello").`,`alert("Hello").`],
    [`@.`,`$.`,`#.`,`No special character.`],
    [`Eval.`,`ParseDoule.`,`ParseObject.`,`Efloat.`],
    [`rnd(7.25).`,`Math.round(7.25).`,`round(7.25).`,`Math.rnd(7.25).`],
    [`ceil(x,y).`,`Math.ceil(x,y).`,`top(x,y).`,`Math.max(x,y).`],
    [`onclick.`,`onchange.`,`onmouseover.`,`onmouseclick.`],
    [`X.`,`*.`,`=.`,`-.`],
    [`NaN.`,`true.`,`false.`,`null.`],
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
var answers = ["b","b","d","d","a","b","d","a","c","b"];
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
    currentUser.jsScore = score;
    var TotalScore = currentUser.htmlScore + currentUser.cssScore + currentUser.jsScore;
    currentUser.totalScore = TotalScore;    
    localStorage.setItem('userScore',JSON.stringify(allUsers));
}
