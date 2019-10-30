'use strict';

var userInput = document.getElementById('userName');
userInput.addEventListener('click',hideEnterUserName);

function hideEnterUserName(e){
  e.preventDefault();
  showUserName();
}

function showUserName() {
  var inputDiv = document.getElementById('input-name');
  var userName = document.getElementById('name').value;

  if(isNaN(userName)){
    var welcomeDiv = document.getElementById('welcome-message');
    var exsamDiv = document.getElementById('exams');
    welcomeDiv.textContent = 'Welcome ' + userName + ', Wish you best of luck in your test.';
    welcomeDiv.setAttribute('style','display:block');
    inputDiv.setAttribute('style','display:none');
    exsamDiv.setAttribute('style','display:block');
  }else{
    // alert("Thank you for trying to take our exam.\nPlease enter a valid name.");
    var warning = document.getElementById('warnning-message');
    warning.setAttribute('style', 'diplay:block');
  }
}
