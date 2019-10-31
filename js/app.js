
'use strict';

var userName;
var allUsers =[];
function Leader(name, scoreForHtml, scoreForCss , scoreForJs , TotalAllScore) {
    this.name = name;
    this.scoreForHtml = scoreForHtml;
    this.scoreForCss = scoreForCss;
    this.scoreForJs = scoreForJs; 
    this.TotalAllScore = TotalAllScore;   
   };


var userInput = document.getElementById('userName');
 userInput.addEventListener('click', usersName );

function usersName(e) {
    e.preventDefault();

    showUserName()
}


function showUserName() {
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


function newObject(name, scoreForHtml, scoreForCss , scoreForJs , TotalAllScore) {
    var user = new Leader(name, scoreForHtml, scoreForCss , scoreForJs , TotalAllScore);
    var users = localStorage.getItem('userScore');
    if(users){
        allUsers = JSON.parse(users); 
    }
    allUsers.push(user);
       
}

