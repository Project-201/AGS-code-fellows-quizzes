'use strict';
var tableSection = document.getElementById("table-section");
var table = document.createElement('table');
tableSection.appendChild(table);
var tr = document.createElement('tr');
table.appendChild(tr);

// tr.setAttribute('class','first-rank');

var td = document.createElement('td');
table.appendChild(td);
td.textContent = 'RANK';

var td = document.createElement('td');
table.appendChild(td);
td.textContent = 'DEVELOPER NAME';

var td = document.createElement('td');
table.appendChild(td);
td.textContent = 'REFERRALS';


function render(){

    




    for(var i = 0 ; i < allUsers.length ; i++){
        var tr = document.createElement('tr');
        table.appendChild(tr);

        var td = document.createElement('td');
        table.appendChild(td);
        td.textContent = i+1;

        td = document.createElement('td');
        table.appendChild(td);
        td.textContent = allUsers[i].name;

        td = document.createElement('td');
        table.appendChild(td);
        td.textContent = allUsers[i].TotalAllScore;
    }





}

allUsers = JSON.parse(localStorage.getItem('userScore'));
// var currentUser = allUsers[allUsers.length -1];

render()