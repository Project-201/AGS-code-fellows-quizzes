'use strict';

 var submit = document.getElementById("submit-exam");
 //  console.log(submit);
 submit.addEventListener('click',noAnswerMes);
 
 function noAnswerMes(event){    
    event.preventDefault();
    submitAnswers();
}

    var q =[
		'<div><h3>1. In which HTML element do we put javascript code?</h3><input type="radio" name="q1" value="a" id="q1a"> &lt;js&gt;<br><input type="radio" name="q1" value="b" id="q1b"> &lt;script&gt;<br>	<input type="radio" name="q1" value="c" id="q1c"> &lt;body&gt;<br><input type="radio" name="q1" value="d" id="q1d"> &lt;link&gt;<br></div>',
	'<div><h3>2. How do you declare a JavaScript variable? </h3><input type="radio" name="q2" value="a" id="q2a"> variable carName;<br><input type="radio" name="q2" value="b" id="q2b"> var carName;  <br><input type="radio" name="q2" value="c" id="q2c"> v carName;<br><input type="radio" name="q2" value="d" id="q2d">  carName;<br></div>',
	'<div><h3>3. How would you write "Hello" in an alert box?</h3><input type="radio" name="q3" value="a" id="q3a"> msg("Hello");<br><input type="radio" name="q3" value="b" id="q3b"> alertbox("Hello");<br><input type="radio" name="q3" value="c" id="q3c"> print("Hello");<br>	<input type="radio" name="q3" value="d" id="q3d"> alert("Hello");<br></div>',

	'<div><h3>4. A variable in javascript must start with which spcial character?</h3><input type="radio" name="q4" value="a" id="q4a"> @<br><input type="radio" name="q4" value="b" id="q4b"> $<br>	<input type="radio" name="q4" value="c" id="q4c"> #<br><input type="radio" name="q4" value="d" id="q4d"> No special character<br></div>',
	'<div><h3>5. Which HTML attribute is used to reference an external JavaScript file?</h3><input type="radio" name="q5" value="a" id="q1a"> src<br><input type="radio" name="q5" value="b" id="q5b"> rel<br><input type="radio" name="q5" value="c" id="q5c"> type<br><input type="radio" name="q5" value="d" id="q5d"> href<br></div>',
	'<div><h3>6.How do you round the number 7.25, to the nearest integer?</h3><input type="radio" name="q6" value="a" id="q6a"> rnd(7.25)<br><input type="radio" name="q6" value="b" id="q6b"> Math.round(7.25)<br><input type="radio" name="q6" value="c" id="q6c"> round(7.25)<br><input type="radio" name="q6" value="d" id="q6d"> Math.rnd(7.25)<br></div>',

	'<div><h3>7.How do you find the number with the highest value of x and y?</h3><input type="radio" name="q7" value="a" id="q7a"> ceil(x,y)<br><input type="radio" name="q7" value="b" id="q7b"> Math.ceil(x,y)<br>	<input type="radio" name="q7" value="c" id="q7c"> top(x,y)<br><input type="radio" name="q7" value="d" id="q7d"> Math.max(x,y)<br></div>',
	'<div><h3>8.Which event occurs when the user clicks on an HTML element? </h3>	<input type="radio" name="q8" value="a" id="q8a"> onclick<br>	<input type="radio" name="q8" value="b" id="q8b"> onchange<br>	<input type="radio" name="q8" value="c" id="q8c"> onmouseover<br>	<input type="radio" name="q8" value="d" id="q8d"> onmouseclick<br></div>',
	
	'<div><h3>9. Which operator is used to assign a value to a variable?</h3>	<input type="radio" name="q9" value="a" id="q9a"> X <br>	<input type="radio" name="q9" value="b" id="q9b"> * <br>	<input type="radio" name="q9" value="c" id="q9c"> = <br>	<input type="radio" name="q9" value="d" id="q9d"> - <br></div>',
	'<div><h3>10. What will the following code return: Boolean(10 > 9)</h3><input type="radio" name="q10" value="a" id="q10a"> NaN<br><input type="radio" name="q10" value="b" id="q10b"> true<br><input type="radio" name="q10" value="c" id="q10c"> false<br><input type="radio" name="q10" value="d" id="q10d"> null<br></div>',
    ]
    
    // var question = [
    //     '<div><h3>1.&nbsp;&nbsp;Choose the correct HTML element for the largest heading:</h3>'
    // }

    // var answer = [
    //     '<input type="radio" name="q1" value="a"> &lt;head&gt;<br>',
    //     '<input type="radio" name="q1" value="b"> &lt;h6&gt;<br>',
    //     '<input type="radio" name="q1" value="c"> &lt;h1&gt;<br>',
    //     '<input type="radio" name="q1" value="d"> &lt;heading&gt;<br></div>'
    // ];


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
   var answers = ["b","b","d","d","a","b","d","a","c","b"];
	;
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



// function randomInRange() {
//     var max = 10;
//     var rand;
//     var min = 1;
//     var range = max - min;
//     var forbidden = [];
//     // var forbidden = [1,2,3,4,5,6,7,8,9,10];
//     for(var i = 0 ; i < 10 ; i++){        
//         do{
//             rand = Math.ceil(Math.random() * range) + min;
//         }while(forbidden.includes(rand) && i <= 9);
//         forbidden.push(rand);
//         form.innerHTML += q;
//     }
// }


// function renderAnswer(){
    
// }
// renderAnswer();
