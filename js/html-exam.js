'use strict';

 var submit = document.getElementById("submit-exam");
 submit.addEventListener('click',noAnswerMes);
 function noAnswerMes(event){    
    event.preventDefault();
    submitAnswers();
}

    var q =[
        '<div><h3>Which attribute replaces the name attribute for the following elements: a, applet, frame, iframe, img, and map?:</h3><input type="radio" name="q1" value="a"> The src attribute;<br><input type="radio" name="q1" value="b">The class attribute;<br><input type="radio" name="q1" value="c"> The id attribute;<br><input type="radio" name="q1" value="d"> The name attribute<br></div>',
         '<div><h3>How do you display a border like this: The top border = 10 pixels The bottom border = 5 pixelsThe left border = 20 pixelsThe right border = 1pixel?</h3>  <input type="radio" name="q2" value="a" id="q2a"> border-width:10px 1px 5px 20px;<br><input type="radio" name="q2" value="b" id="q2b">border-width:10px 20px 5px 1px;<br><input type="radio" name="q2" value="c" id="q2c"> border-width:5px 20px 10px 1px ;<br><input type="radio" name="q2" value="d" id="q2d">border-width:10px 5px 20px 1px;<br></div>',
         '<div><h3>The HTML global attribute, "contenteditable" is used to:</h3><input type="radio" name="q3" value="a" id="q3a"> Update content from the srever<br><input type="radio" name="q3" value="b" id="q3b"> Return the position of the first found occurrence of content inside a string<br><input type="radio" name="q3" value="c" id="q3c"> Specify whether the content of an element should be editable or not <br> <input type="radio" name="q3" value="d" id="q3d"> Specifies a context menu for an element .The menu appears when a user right-clicks on the element<br></div>' ,
         ' <div><h3>Increasing the cellpadding value will what ?</h3><input type="radio" name="q4" value="a" id="q4a"> Increase the softness of your site<br><input type="radio" name="q4" value="b" id="q4b"> Increase the space between cells<br><input type="radio" name="q4" value="c" id="q4c"> Increase the distance between cell and content <br><input type="radio" name="q4" value="d" id="q4d"> Increase the space between cells and elements <br> </div> ',
         ' <div><h3>In HTML, onblur and onfocus are:</h3><input type="radio" name="q5" value="a" id="q5a"> Event attributes<br><input type="radio" name="q5" value="b" id="q5b"> Style attributes<br><input type="radio" name="q5" value="c" id="q5c"> HTML elements <br><input type="radio" name="q5" value="d" id="q5d"> No special character<br></div>' ,
         '<div><h3>Graphics defined by SVG is in which format? </h3><input type="radio" name="q6" value="a" id="q6a">HTML<br> <input type="radio" name="q6" value="b" id="q6b"> CSS<br> <input type="radio" name="q6" value="c" id="q6c"> XML<br><input type="radio" name="q6" value="d" id="q6d">PHP<br></div>',
         '<div> <h3>How do you display hyperlinks without an underline?</h3> <input type="radio" name="q7" value="a" id="q7a"> a {underline:none}; <br> <input type="radio" name="q7" value="b" id="q7b"> a {text-decoration:none} ;<br> <input type="radio" name="q7" value="c" id="q7c"> a {text-decoration:no underline};<br> <input type="radio" name="q7" value="d" id="q7d"> a {decoration:no underline};<br> </div>',
         '<div><h3>What does an HTML tag do?</h3><input type="radio" name="q8" value="a" id="q8a"> It specifies formatting and layout instructions for your web page.<br><input type="radio" name="q8" value="b" id="q8b"> It hides programming instructions from view<br><input type="radio" name="q8" value="c" id="q8c">It connects your web site to an operating environment<br><input type="radio" name="q8" value="d" id="q8d">It determines the organizational structure of your Web site. <br></div>' ,
         '<div><h3>Which HTML element is used to display a scalar measurement within a range?</h3><input type="radio" name="q9" value="a" id="q9a"> &lt;measure&gt;<br><input type="radio" name="q9" value="b" id="q9b"> &lt;meter&gt;<br><input type="radio" name="q9" value="c" id="q9c"> &lt;range&gt;<br><input type="radio" name="q9" value="d" id="q9d"> &lt;gauge&gt;<br></div>',
         '<div><h3>Where in an HTML document is the correct place to refer to an external style sheet?</h3><input type="radio" name="q10" value="a" id="q10a"> In the < body > section <br><input type="radio" name="q10" value="b" id="q10b"> In the < head > section <br><input type="radio" name="q10" value="c" id="q10c"> At the top of the document <br><input type="radio" name="q10" value="d" id="q10d">At the end of the document <br></div>',
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
    addScore();

    //Display Results
    var results = document.getElementById('results');
    results.innerHTML = '<h3>Result: You scored&nbsp; <span>'+score+'</span>&nbsp; out of &nbsp;<span>'+total+'&nbsp;</span></h3>';

    // alert('You scored '+score+' out of '+total);
    var nextExam = document.getElementById("next-exam");
    nextExam.setAttribute('style','display:inline');
    if(x){
        var noAnswer = document.getElementById("no-answers");
        noAnswer.setAttribute('style','display:none');
    }

    // return false;
    
    // newObject(userName, score);

}
allUsers= JSON.parse(localStorage.getItem('userScore'));
var currentUser = allUsers[allUsers.length -1];

var ccc= currentUser.name;

function addScore(){
    currentUser.scoreForHtml = score;
    
    localStorage.setItem('userScore',JSON.stringify(allUsers));
    console.log(currentUser.scoreForHtml);


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