'use strict';

 var submit = document.getElementById("submit-exam");
 submit.addEventListener('click',noAnswerMes);
 function noAnswerMes(event){    
    event.preventDefault();
    submitAnswers();
}

    var q =[
        '<div><h3>1.&nbsp;&nbsp;Choose the correct HTML element for the largest heading:</h3><input type="radio" name="q1" value="a"> &lt;head&gt;<br><input type="radio" name="q1" value="b"> &lt;h6&gt;<br><input type="radio" name="q1" value="c"> &lt;h1&gt;<br><input type="radio" name="q1" value="d"> &lt;heading&gt;<br></div>',

        '<div><h3>2.&nbsp;&nbsp;Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?</h3>  <input type="radio" name="q2" value="a" id="q2a"> alt;<br><input type="radio" name="q2" value="b" id="q2b">longdesc;<br><input type="radio" name="q2" value="c" id="q2c"> src ;<br><input type="radio" name="q2" value="d" id="q2d"> title;<br></div>',

        '<div><h3>3.&nbsp;&nbsp;The HTML global attribute, "contenteditable" is used to:</h3><input type="radio" name="q3" value="a" id="q3a"> Update content from the srever<br><input type="radio" name="q3" value="b" id="q3b"> Return the position of the first found occurrence of content inside a string<br><input type="radio" name="q3" value="c" id="q3c"> Specify whether the content of an element should be editable or not <br> <input type="radio" name="q3" value="d" id="q3d"> Specifies a context menu for an element .The menu appears when a user right-clicks on the element<br></div>' ,

        ' <div><h3>4.&nbsp;&nbsp;In HTML, which attribute is used to specify that an input field must be filled out?</h3><input type="radio" name="q4" value="a" id="q4a"> formvalidate<br><input type="radio" name="q4" value="b" id="q4b"> validate<br><input type="radio" name="q4" value="c" id="q4c"> required <br><input type="radio" name="q4" value="d" id="q4d"> placeholder<br> </div> ',

        ' <div><h3>5.&nbsp;&nbsp;In HTML, onblur and onfocus are:</h3><input type="radio" name="q5" value="a" id="q5a"> Event attributes<br><input type="radio" name="q5" value="b" id="q5b"> Style attributes<br><input type="radio" name="q5" value="c" id="q5c"> HTML elements <br><input type="radio" name="q5" value="d" id="q5d"> No special character<br></div>' ,

        '<div><h3>6.&nbsp;&nbsp;Graphics defined by SVG is in which format? </h3><input type="radio" name="q6" value="a" id="q6a">HTML<br> <input type="radio" name="q6" value="b" id="q6b"> CSS<br> <input type="radio" name="q6" value="c" id="q6c"> XML<br><input type="radio" name="q6" value="d" id="q6d">PHP<br></div>',

        '<div> <h3>7.&nbsp;&nbsp;How can you make a bulleted list?</h3> <input type="radio" name="q7" value="a" id="q7a"> &lt;ol&gt; <br> <input type="radio" name="q7" value="b" id="q7b"> &lt;ul&gt;<br> <input type="radio" name="q7" value="c" id="q7c"> &lt;list&gt;<br> <input type="radio" name="q7" value="d" id="q7d"> &lt;dl&gt;<br> </div>',

        '<div><h3>8.&nbsp;&nbsp;Which input type defines a slider control?</h3><input type="radio" name="q8" value="a" id="q8a">search<br><input type="radio" name="q8" value="b" id="q8b"> slider<br><input type="radio" name="q8" value="c" id="q8c"> controls <br><input type="radio" name="q8" value="d" id="q8d"> range<br></div>' ,

        '<div><h3>9.&nbsp;&nbsp;Which HTML element is used to display a scalar measurement within a range?</h3><input type="radio" name="q9" value="a" id="q9a"> &lt;measure&gt;<br><input type="radio" name="q9" value="b" id="q9b"> &lt;meter&gt;<br><input type="radio" name="q9" value="c" id="q9c"> &lt;range&gt;<br><input type="radio" name="q9" value="d" id="q9d"> &lt;gauge&gt;<br></div>',
        
        '<div><h3>10.&nbsp;&nbsp;What does HTML stand for?</h3><input type="radio" name="q10" value="a" id="q10a"> Home Tool Markup Language <br><input type="radio" name="q10" value="b" id="q10b"> Hyper Text Markup Language<br><input type="radio" name="q10" value="c" id="q10c"> Hyperlinks and Text Markup Language <br><input type="radio" name="q10" value="d" id="q10d"> Home Tool and Test Markup Language <br></div>',
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
    var answers = ["c","a","c","c","a","c","b","d","b","b"];
    var x = 0;
    //Check Answer
    for(var i=0;i<10;i++){
        if(eval('q'+(i+1)) == answers[i]){
            score++;
            x++;
            // submit.removeEventListener('submit',noAnswerMes);
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

/*************************************************** */
// var question = [
    //     '<div><h3>1.&nbsp;&nbsp;Choose the correct HTML element for the largest heading:</h3>'
    // }

    // var answer = [
    //     '<input type="radio" name="q1" value="a"> &lt;head&gt;<br>',
    //     '<input type="radio" name="q1" value="b"> &lt;h6&gt;<br>',
    //     '<input type="radio" name="q1" value="c"> &lt;h1&gt;<br>',
    //     '<input type="radio" name="q1" value="d"> &lt;heading&gt;<br></div>'
    // ];
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