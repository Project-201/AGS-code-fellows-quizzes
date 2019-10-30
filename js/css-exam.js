'use strict';

 var submit = document.getElementById("submit-exam");
 
 submit.addEventListener('click',noAnswerMes);
 
 function noAnswerMes(event){    
    event.preventDefault();
    submitAnswers();
}

    var q =[
		'<div><h3> How do you make a list that lists its items with squares?  </h3><input type="radio" name="q1" value="a" id="q1a"> list-style-type: square;<br><input type="radio" name="q1" value="b" id="q1b"> list-type: square;<br><input type="radio" name="q1" value="c" id="q1c"> list: square;<br><input type="radio" name="q1" value="d" id="q1d"> list;<br></div>',
		'<div><h3>Which of the following defines 1% of viewport height?  </h3><input type="radio" name="q2" value="a" id="q2a"> px <br><input type="radio" name="q2" value="b" id="q2b">vmin<br><input type="radio" name="q2" value="c" id="q2c"> vw<br><input type="radio" name="q2" value="d" id="q2d">  vh <br></div>',
        '<div><h3> __________ is a property that allows developers to add rounded corners on the design elements </h3><input type="radio" name="q3" value="a" id="q3a"> Round Corner;<br><input type="radio" name="q3" value="b" id="q3b">  Box Shadow;<br><input type="radio" name="q3" value="c" id="q3c"> Border-Radius;<br> <input type="radio" name="q3" value="d" id="q3d"> Corner; <br></div>',
        '<div><h3> How to rotate objects using CSS3? </h3><input type="radio" name="q4" value="a" id="q4a"> object-rotation: 30deg;<br><input type="radio" name="q4" value="b" id="q4b">rotate-object: 30deg; <br><input type="radio" name="q4" value="c" id="q4c"> transform: rotate-30deg-clockwise;<br><input type="radio" name="q4" value="d" id="q4d"> transform: rotate(30deg);<br></div>',
        '<div><h3>How do you insert a comment in a CSS file? </h3><input type="radio" name="q5" value="a" id="q5a"> //this is a comment<br><input type="radio" name="q5" value="b" id="q5b"> this is a comment<br><input type="radio" name="q5" value="c" id="q5c"> /*this is a comment*/<br> <input type="radio" name="q5" value="d" id="q5d"> //this is a comment//<br></div>',
        '<div><h3> Box-Shadow is a property that allows developers to apply a....</h3><input type="radio" name="q6" value="a" id="q6a"> Border<br><input type="radio" name="q6" value="b" id="q6b">  Rounded Corner<br><input type="radio" name="q6" value="c" id="q6c"> Drop Shadow<br> <input type="radio" name="q6" value="d" id="q6d"> Background<br></div>',
        '<div><h3> What are the first three values of text-shadow in order?</h3><input type="radio" name="q7" value="a" id="q7a"> vertical, horizontal, blur<br><input type="radio" name="q7" value="b" id="q7b"> blur, vertical, horizontal <br><input type="radio" name="q7" value="c" id="q7c"> horizontal, vertical, blur <br> <input type="radio" name="q7" value="d" id="q7d">vertical, blur, horizontal <br></div>',
        '<div><h3> How to force a word wrap using CSS3?</h3><input type="radio" name="q8" value="a" id="q8a"> text-wrap: break-word;<br><input type="radio" name="q8" value="b" id="q8b">word-wrap: break-word; <br><input type="radio" name="q8" value="c" id="q8c"> text-wrap: force;<br><input type="radio" name="q8" value="d" id="q8d"> text-width: set;<br></div>',
        '<div><h3> Which of the following selector matches the name of any element type? </h3><input type="radio" name="q9" value="a" id="q9a"> The Type Selector<br><input type="radio" name="q9" value="b" id="q9b"> The Universal Selector <br><input type="radio" name="q9" value="c" id="q9c"> The Class Selector<br><input type="radio" name="q9" value="d" id="q9d"> The Descendant Selector <br></div>',
        '<div><h3> How to re-size/scale objects using CSS3?</h3><input type="radio" name="q10" value="a" id="q10a"> scale-object: 2,4;<br><input type="radio" name="q10" value="b" id="q10b"> transform: scale(2,4);  <br><input type="radio" name="q10" value="c" id="q10c"> scale: (2,4);<br>  <input type="radio" name="q10" value="d" id="q10d"> transform scale-object: 2,4 <br></div>'      
    ]
    
var form = document.getElementById('form');

function randomInRange() {
    shuffle(q);
    for(var i = 0 ; i < 10 ; i ++){
        form.innerHTML += q[i];
    }
}
randomInRange();

function shuffle(arr){
    var ctr = arr.length-1,temp,index;
    while(ctr > 0){
        index = Math.ceil(Math.random() * ctr);
        ctr--;
        temp = arr[ctr];
        arr[ctr] = arr[index];
        arr[index] = temp;
    }
    return arr;
}
var score;
function submitAnswers(){
    var total = 10;
    score = 0;
    //Get User Input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;
    var q6 = document.forms["quizForm"]["q6"].value;
    var q7 = document.forms["quizForm"]["q7"].value;
    var q8 = document.forms["quizForm"]["q8"].value;
    var q9 = document.forms["quizForm"]["q9"].value;
    var q10 = document.forms["quizForm"]["q10"].value;

    //Validation

    for (var i = 1; i <= 10; i++) {
        if(eval('q'+i) == null || eval('q'+i) == ''){
            var noAnswer = document.getElementById("no-answers");
            noAnswer.setAttribute('style','display:block');
            return false;
        }        
    }
    
    //Set Answer
    var answers = ["a","d","c","d","c","c","c","b","b","b"];

    var x = 0;
    //Check Answer
    for(var i=0;i<10;i++){
        if(eval('q'+(i+1)) == answers[i]){
            score++;
            x++;
        }
    }
    addScore();
    //Display Results
    var results = document.getElementById('results');
    results.innerHTML = '<h3>Result: You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';

    // alert('You scored '+score+' out of '+total);
    var nextExam = document.getElementById("next-exam");
    nextExam.setAttribute('style','display:inline');
    if(x){
        var noAnswer = document.getElementById("no-answers");
        noAnswer.setAttribute('style','display:none');
    }

    return false;
    

    }

    allUsers= JSON.parse(localStorage.getItem('userScore'));
    var currentUser = allUsers[allUsers.length -1];
    
    var ccc= currentUser.name;
    
    function addScore(){
        currentUser.scoreForCss = score;
        
        localStorage.setItem('userScore',JSON.stringify(allUsers));
        console.log(currentUser.scoreForCss);
    
    
    }