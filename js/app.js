'use strict';

var userName;
var allUsers =[];
function Leader(name, htmlScore, cssScore , jsScore , totalScore) {
    this.name = name;
    this.htmlScore = htmlScore;
    this.cssScore = cssScore;
    this.jsScore = jsScore; 
    this.totalScore = totalScore;   
};

var userInput = document.getElementById('userName');
if(userInput) userInput.addEventListener('click', showUserName );

function showUserName(e) {
  e.preventDefault();
  var inputDiv = document.getElementById('input-name');
  userName = document.getElementById('name').value;
  if(isNaN(userName)){
    var welcomeDiv = document.getElementById('welcome-message');
    var exsamDiv = document.getElementById('exams');
    welcomeDiv.textContent = 'Welcome ' + userName + ', Wish you best of luck in your test.';
    welcomeDiv.setAttribute('style','display:block');
    inputDiv.setAttribute('style','display:none');
    exsamDiv.setAttribute('style','display:block');
    newObject(userName,0,0,0);
    localStorage.setItem('userScore',JSON.stringify(allUsers));
  }else{     
    var warning = document.getElementById('warning-message');
    warning.setAttribute('style', 'display:block');
  }
}

function newObject(name, htmlScore, cssScore , jsScore , totalScore) {
  var user = new Leader(name, htmlScore, cssScore , jsScore , totalScore);
  var storedUsers = localStorage.getItem('userScore');
  if(storedUsers) allUsers = JSON.parse(storedUsers); 
  allUsers.push(user);       
}
