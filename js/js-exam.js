'use strict';

 var submit = document.getElementById("submit-exam");
 
 submit.addEventListener('click',noAnswerMes);
 
 function noAnswerMes(event){    
    event.preventDefault();
    submitAnswers();
}

    var q =[
		'<div><h3>1. Which is the correct way to write a JavaScript array?</h3><input type="radio" name="q1" value="a" id="q1a"> var txt = new Array(1:"arr",2:"kim",3:"jim");<br><input type="radio" name="q1" value="b" id="q1b"> var txt = new Array("arr ","kim","jim");<br><input type="radio" name="q1" value="c" id="q1c">  var txt = new Array:1=(" arr ")2=("kim")3=("jim");<br><input type="radio" name="q1" value="d" id="q1d"> var txt = new Array=" arr ","kim","jim";<br></div>',
	'<div><h3>2.Which of the following is correct to write “Hello World” on the web page? </h3><input type="radio" name="q2" value="a" id="q2a"> System.out.println(“Hello World”)<br><input type="radio" name="q2" value="b" id="q2b"> document.write(“Hello World”) <br><input type="radio" name="q2" value="c" id="q2c"> print(“Hello World”);<br><input type="radio" name="q2" value="d" id="q2d">   response.write(“Hello World”);<br></div>',
	'<div><h3>3. How would you write "Hello" in an alert box?</h3><input type="radio" name="q3" value="a" id="q3a"> msg("Hello");<br><input type="radio" name="q3" value="b" id="q3b"> alertbox("Hello");<br><input type="radio" name="q3" value="c" id="q3c"> print("Hello");<br>	<input type="radio" name="q3" value="d" id="q3d"> alert("Hello");<br></div>',

	'<div><h3>4. A variable in javascript must start with which spcial character?</h3><input type="radio" name="q4" value="a" id="q4a"> @<br><input type="radio" name="q4" value="b" id="q4b"> $<br>	<input type="radio" name="q4" value="c" id="q4c"> #<br><input type="radio" name="q4" value="d" id="q4d"> No special character<br></div>',
	'<div><h3>5. Which of the following method is used to evaluate a string of Java Script code in the context of the specified object? </h3><input type="radio" name="q5" value="a" id="q1a"> Eval<br><input type="radio" name="q5" value="b" id="q5b"> ParseDoule<br><input type="radio" name="q5" value="c" id="q5c"> ParseObject<br><input type="radio" name="q5" value="d" id="q5d">  Efloat<br></div>',
	'<div><h3>6.How do you round the number 7.25, to the nearest integer?</h3><input type="radio" name="q6" value="a" id="q6a"> rnd(7.25)<br><input type="radio" name="q6" value="b" id="q6b"> Math.round(7.25)<br><input type="radio" name="q6" value="c" id="q6c"> round(7.25)<br><input type="radio" name="q6" value="d" id="q6d"> Math.rnd(7.25)<br></div>',

	'<div><h3>7.How do you find the number with the highest value of x and y?</h3><input type="radio" name="q7" value="a" id="q7a"> ceil(x,y)<br><input type="radio" name="q7" value="b" id="q7b"> Math.ceil(x,y)<br>	<input type="radio" name="q7" value="c" id="q7c"> top(x,y)<br><input type="radio" name="q7" value="d" id="q7d"> Math.max(x,y)<br></div>',
	'<div><h3>8.Which event occurs when the user clicks on an HTML element? </h3>	<input type="radio" name="q8" value="a" id="q8a"> onclick<br>	<input type="radio" name="q8" value="b" id="q8b"> onchange<br>	<input type="radio" name="q8" value="c" id="q8c"> onmouseover<br>	<input type="radio" name="q8" value="d" id="q8d"> onmouseclick<br></div>',
	
	'<div><h3>9. Which operator is used to assign a value to a variable?</h3>	<input type="radio" name="q9" value="a" id="q9a"> X <br>	<input type="radio" name="q9" value="b" id="q9b"> * <br>	<input type="radio" name="q9" value="c" id="q9c"> = <br>	<input type="radio" name="q9" value="d" id="q9d"> - <br></div>',
	'<div><h3>10. What will the following code return: Boolean(10 > 9)</h3><input type="radio" name="q10" value="a" id="q10a"> NaN<br><input type="radio" name="q10" value="b" id="q10b"> true<br><input type="radio" name="q10" value="c" id="q10c"> false<br><input type="radio" name="q10" value="d" id="q10d"> null<br></div>',
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

    
    var nextExam = document.getElementById("next-exam");
    nextExam.setAttribute('style','display:inline');
    if(x){
        var noAnswer = document.getElementById("no-answers");
        noAnswer.setAttribute('style','display:none');
    }
    return false;
    
    }

