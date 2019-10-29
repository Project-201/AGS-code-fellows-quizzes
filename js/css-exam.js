'use strict';

 var submit = document.getElementById("submit-exam");
 //  console.log(submit);
 submit.addEventListener('click',noAnswerMes);
 
 function noAnswerMes(event){    
    event.preventDefault();
    submitAnswers();
}

    var q =[
		'<div><h3>1. How do you make a list that lists its items with squares?  </h3><input type="radio" name="q1" value="a" id="q1a"> list-style-type: square;<br><input type="radio" name="q1" value="b" id="q1b"> list-type: square;<br><input type="radio" name="q1" value="c" id="q1c"> list: square;<br><input type="radio" name="q1" value="d" id="q1d"> list;<br></div>',
		'<div><h3>2. What does CSS stand for?  </h3><input type="radio" name="q2" value="a" id="q2a"> Computer Style Sheets<br><input type="radio" name="q2" value="b" id="q2b"> Colorful Style Sheets<br><input type="radio" name="q2" value="c" id="q2c"> Creative Style Sheets<br><input type="radio" name="q2" value="d" id="q2d"> Cascading Style Sheets<br></div>',
			'<div><h3>3. Which HTML tag is used to define an internal style sheet? </h3><input type="radio" name="q3" value="a" id="q3a"> &lt;Script&gt;<br><input type="radio" name="q3" value="b" id="q3b"> &lt;CSS&gt;<br><input type="radio" name="q3" value="c" id="q3c"> &lt;style&gt;<br> <input type="radio" name="q3" value="d" id="q3d"> &lt; javascript&gt; <br></div>',
			'<div><h3>4. Which HTML attribute is used to define inline styles? </h3><input type="radio" name="q4" value="a" id="q4a"> class<br><input type="radio" name="q4" value="b" id="q4b"> Styles <br><input type="radio" name="q4" value="c" id="q4c"> font<br><input type="radio" name="q4" value="d" id="q4d"> style<br></div>',
			'<div><h3>5.How do you insert a comment in a CSS file? </h3><input type="radio" name="q5" value="a" id="q5a"> //this is a comment<br><input type="radio" name="q5" value="b" id="q5b"> this is a comment<br><input type="radio" name="q5" value="c" id="q5c"> /*this is a comment*/<br> <input type="radio" name="q5" value="d" id="q5d"> //this is a comment//<br></div>',
			'<div><h3>6. Which property is used to change the background color?</h3><input type="radio" name="q6" value="a" id="q6a"> color<br><input type="radio" name="q6" value="b" id="q6b"> bgcolor<br><input type="radio" name="q6" value="c" id="q6c"> background-color<br> <input type="radio" name="q6" value="d" id="q6d"> backgroundColor<br></div>',
			'<div><h3>7. Which CSS property is used to change the text color of an element?</h3><input type="radio" name="q7" value="a" id="q7a"> fgcolor<br><input type="radio" name="q7" value="b" id="q7b"> text-color <br><input type="radio" name="q7" value="c" id="q7c"> color<br> <input type="radio" name="q7" value="d" id="q7d"> txtColor <br></div>',
			'<div><h3>8. Which CSS property controls the text size?</h3><input type="radio" name="q8" value="a" id="q8a"> text-size<br><input type="radio" name="q8" value="b" id="q8b"> font-size <br><input type="radio" name="q8" value="c" id="q8c"> font-syle<br><input type="radio" name="q8" value="d" id="q8d"> text-style<br></div>',
			'<div><h3>9. Which property is used to change the font of an element? </h3><input type="radio" name="q9" value="a" id="q9a"> font-weight<br><input type="radio" name="q9" value="b" id="q9b"> font-family <br><input type="radio" name="q9" value="c" id="q9c"> font-style<br><input type="radio" name="q9" value="d" id="q9d"> font-size <br></div>',
               '<div><h3>10. Which property is used to change the left margin of an element?</h3><input type="radio" name="q10" value="a" id="q10a"> padding-left<br><input type="radio" name="q10" value="b" id="q10b"> margin-left <br><input type="radio" name="q10" value="c" id="q10c"> indent<br>  <input type="radio" name="q10" value="d" id="q10d"> border <br></div>'      
    ]
    
   


var form = document.getElementById('form');

// function randomInRange() {
//     shuffle(question);
//     shuffle(answer);
//     for(var i = 0 ; i < 10 ; i ++){
//         form.innerHTML += question[i];
//         form.innerHTML += answer[i];
//     }
// }
// randomInRange();

// function shuffle(arr){
//     var ctr = arr.length,temp,index;
//     while(ctr > 0){
//         index = Math.ceil(Math.random() * ctr);
//         ctr--;
//         temp = arr[ctr];
//         arr[ctr] = arr[index];
//         arr[index] = temp;
//     }
//     return arr;
// }

function randomInRange() {
    shuffle(q);
    for(var i = 0 ; i < 10 ; i ++){
        form.innerHTML += q[i];
    }
}
randomInRange();

function shuffle(arr){
    var ctr = arr.length,temp,index;
    while(ctr > 0){
        index = Math.ceil(Math.random() * ctr);
        ctr--;
        temp = arr[ctr];
        arr[ctr] = arr[index];
        arr[index] = temp;
    }
    return arr;
}


function submitAnswers(){
    var total = 10;
    var score = 0;

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

