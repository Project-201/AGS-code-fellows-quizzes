'use strict';

// array of questions
var q = [
    `Which attribute replaces the name attribute for the following elements: a, applet, frame, iframe, img, and map?`,
    `How do you display a border like this: The top border = 10 pixels The bottom border = 5 pixelsThe left border = 20 pixelsThe right border = 1pixel?`,
    `The HTML global attribute, "contenteditable" is used to:`,
    `Increasing the cellpadding value will what?`,
    `In HTML, onblur and onfocus are:`,
    `Graphics defined by SVG is in which format?`,
    `How do you display hyperlinks without an underline?`,
    `What does an HTML tag do?`,
    `Which HTML element is used to display a scalar measurement within a range?`,
    `Where in an HTML document is the correct place to refer to an external style sheet?`,
]
// array of answers
var a =[
    [`The src attribute.`,`The class attribute.`,`The id attribute`,`The name attribute`],
    [`border-width:10px 1px 5px 20px.`,`border-width:10px 20px 5px 1px.`,`border-width:5px 20px 10px 1px.`,`border-width:5px 20px 10px 1px.`],
    [`Update content from the srever.`,`Return the position of the first found occurrence of content inside a string.`,`Specify whether the content of an element should be editable or not.`,`Specifies a context menu for an element .The menu appears when a user right-clicks on the element.`],
    [`Increase the softness of your site.`,`Increase the space between cells.`,`Increase the distance between cell and content.`,`Increase the space between cells and elements.`],
    [`Event attributes.`,`Style attributes.`,`HTML elements.`,`No special character.`],
    [`HTML.`,`CSS.`,`XML.`,`PHP.`],
    [`a {underline:none}.`,`a {text-decoration:none}.`,`a {text-decoration:no underline}.`,`a {decoration:no underline}.`],
    [`It specifies formatting and layout instructions for your web page.`,`It hides programming instructions from view.`,`It connects your web site to an operating environment.`,`It determines the organizational structure of your Web site.`],
    [`&lt;measure&gt.`,`&lt;meter&gt.`,`&lt;range&gt.`,`&lt;gauge&gt.`],
    [`In the < body > section.`,`In the < head > section.`,`At the top of the document.`,`At the end of the document.`],
]

var submit = document.getElementById("submit-exam");
submit.addEventListener('click',submitAnswers);
var form = document.getElementById('form');

allUsers= JSON.parse(localStorage.getItem('userScore'));
var currentUser = allUsers[allUsers.length -1];

// correct answers
var answers = ["c","a","c","c","a","c","b","d","b","b"];
// full mark
var total = 10;
// initial user score
var score = 0;

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
    currentUser.htmlScore = score;    
    localStorage.setItem('userScore',JSON.stringify(allUsers));
}