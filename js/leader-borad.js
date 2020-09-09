'use strict';

var tableSection = document.getElementById("table-section");
var table = document.createElement('table');

var allUsers = JSON.parse(localStorage.getItem('userScore'));

createTableHeader()
render()

function createTableHeader(){
    tableSection.appendChild(table);
    var tr = document.createElement('tr');
    table.appendChild(tr);

    var td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = 'Rank';

    var td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = 'Developer Name';

    var td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = 'Score / 30';

    tr.setAttribute('class','first-rank');
}

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
        td.textContent = allUsers[i].totalScore;
    }
}
