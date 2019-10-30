
// new variable to store chosen pole's id
var fromPole = null;
// counter for moves
var moves = 0;
// counter for number of donuts
var donutCount = 5;

var alertPopup = document.getElementById('alertNoDonuts');
function alertNoDonuts(){
  alertPopup.textContent = 'NO DONUTS TO MOVE'
  alertPopup.style.visibility = "visible";
  slapAudio.play();
  setTimeout(function(){ alertPopup.style.visibility= "hidden" }, 2200);
}
function alertBigOnSmall(){
  alertPopup.textContent = "YOU CAN'T STACK BIG DONUT ON SMALLER DONUT";
  alertPopup.style.visibility = "visible";
  slapAudio.play();
  setTimeout(function(){ alertPopup.style.visibility= "hidden" }, 2200);
}


//constructor function for donuts
function Donut(size){
  this.size = size;
}
//constructor function for the poles.
function Pole(id){
  this.id = id;
  this.donuts =[];
  // comparison function to determine if legal move
  this.isSmaller = function (){
    if (poles[fromPole].donuts.length === 0){
      fromPole = null;
      alertNoDonuts();
      return false;
    }
    else if(this.donuts.length === 0){
      return true;
    }
    else if (this.donuts[this.donuts.length-1].size > poles[fromPole].donuts[poles[fromPole].donuts.length-1].size) {
      return true;
    } else {
      fromPole = null;
      alertBigOnSmall();
      return false;
    }
  };


  
  // function to handle donut moves
  this.move = function () {
    
    var poleNumber = Number(this.id[this.id.length - 1]);
    if (fromPole === null){
      fromPole = poleNumber;
      buttonAudio.play();

    }
    else if(poles[poleNumber].isSmaller()) {
      poles[poleNumber].donuts.push(poles[fromPole].donuts[poles[fromPole].donuts.length-1]);
      var parentEl = document.getElementById('post'+ poles[poleNumber].id);
      var child = document.getElementsByClassName('donut' + poles[fromPole].donuts[poles[fromPole].donuts.length-1].size)[0];
      moves++;
      buttonOffAudio.play()
      parentEl.appendChild(child);
      poles[fromPole].donuts.pop();
      fromPole = null;
      render();
    }
  };
}

// empty leaderboard
function LeaderBoard() {
  this.board = [];
  this.displayBoard = function() {
    // alert();
    
  };
  this.getName = function() {
    // return prompt('What is your name?');
    return document.getElementById('username').value;
  };
  this.addLeader = function() {
    var userName = leaders.getName();
    leaders.board.push(new Leader(userName, moves, donutCount));
    leaders.board.sort(function(a, b) {
      return a.moves - b.moves;
    });

    leaders.pushToLocal();
  };
  this.pushToLocal = function() {
    localStorage.setItem('towersOfHanoi',JSON.stringify(leaders));
  };
  this.pullFromLocal = function() {
    if(localStorage.getItem('towersOfHanoi')) {
      leaders.board = JSON.parse(localStorage.getItem('towersOfHanoi')).board;
    }
  };
}

function Leader(name, moves, donutCount) {
  this.name = name;
  this.moves = moves;
  this.donutCount = donutCount;
}


// checks to see if we have a winner
function isAWinner() {
  if(poles[1].donuts.length === donutCount || poles[2].donuts.length === donutCount) {

    winnerWinner();
  }
}

// this is where we putt our animation for the winner
function winnerWinner() {
  promptScoreBoard();
}

function reset() {
  for (var i = 0; i < poles.length; i++) {
    poles[i].donuts = [];
  }

  post0El.innerHTML = '';
  post1El.innerHTML = '';
  post2El.innerHTML = '';

  if(donutCount === 5) {
    pole0.donuts.push(new Donut(5));
    pole0.donuts.push(new Donut(4));
    pole0.donuts.push(new Donut(3));
    pole0.donuts.push(new Donut(2));
    pole0.donuts.push(new Donut(1));
    post0El.appendChild(donut5);
    post0El.appendChild(donut4);
    post0El.appendChild(donut3);
    post0El.appendChild(donut2);
    post0El.appendChild(donut1);
  }
  else if(donutCount === 4) {
    pole0.donuts.push(new Donut(5));
    pole0.donuts.push(new Donut(4));
    pole0.donuts.push(new Donut(3));
    pole0.donuts.push(new Donut(2));
    post0El.appendChild(donut5);
    post0El.appendChild(donut4);
    post0El.appendChild(donut3);
    post0El.appendChild(donut2);
  }
  else if(donutCount === 3) {
    pole0.donuts.push(new Donut(5));
    pole0.donuts.push(new Donut(4));
    pole0.donuts.push(new Donut(3));
    post0El.appendChild(donut5);
    post0El.appendChild(donut4);
    post0El.appendChild(donut3);
  }
  
  moves = 0;
  fromPole = null;
  // write the code for 3 different children and 3 different parent.
  updateMinMoves();
  render();
}

function render() {
  if(document.getElementById('moves')) {
    document.getElementById('moves').textContent = `Moves: ${moves}`;
  }  
  isAWinner();
}

// instantiate a new pole1
var pole0 = new Pole(0);
//populate the pole with 3 donuts at the beginning of page.
pole0.donuts.push(new Donut(5));
pole0.donuts.push(new Donut(4));
pole0.donuts.push(new Donut(3));
pole0.donuts.push(new Donut(2));
pole0.donuts.push(new Donut(1));

// instantiate a new poles 2 and 3/
var pole1 = new Pole(1);
var pole2 = new Pole(2);
var poles = [pole0,pole1,pole2];

// creating sounds
var buttonAudio = new Audio('sound/button.m4a');
var buttonOffAudio = new Audio('sound/buttonOff.m4a');
var slapAudio = new Audio('sound/slap.m4a');
slapAudio.volume = 0.35;



if(document.getElementById('post0')) {
  document.getElementById('post0').addEventListener('click', poles[0].move);
}
if(document.getElementById('post1')) {
  document.getElementById('post1').addEventListener('click', poles[1].move);
}
if(document.getElementById('post2')) {
  document.getElementById('post2').addEventListener('click', poles[2].move);
}
if(document.getElementById('reset-btn')) {
  document.getElementById('reset-btn').addEventListener('click', reset);
}
if(document.getElementById('about')) {
  document.getElementById('about').addEventListener('click', function() {
    document.location.assign('about.html');
  });
}
if(document.getElementById('instructions')) {
  document.getElementById('instructions').addEventListener('click', function() {
    document.location.assign('instructions.html');
  });
}
if(document.getElementById('leaderBoard')) {
  document.getElementById('leaderBoard').addEventListener('click', function() {
    document.location.assign('leaderboard.html');
  });
}

render();

var post0El = document.getElementById('post0');
var post1El = document.getElementById('post1');
var post2El = document.getElementById('post2');

if(post0El){
  //making new donuts in HTML
  var donut5 = document.createElement('img');
  donut5.src = 'img/donutFive.png'
  donut5.classList.add('donut5');
  post0El.appendChild(donut5);

  var donut4 = document.createElement('img');
  donut4.src = 'img/donutFour.png'
  donut4.classList.add('donut4');
  post0El.appendChild(donut4);

  var donut3 = document.createElement('img');
  donut3.src = 'img/donutThree.png'
  donut3.classList.add('donut3');
  post0El.appendChild(donut3);

  var donut2 = document.createElement('img')
  donut2.src = 'img/DonutTwo.png'
  donut2.classList.add('donut2');
  post0El.appendChild(donut2);

  var donut1 = document.createElement('img');
  donut1.src = 'img/DonutOne.png'
  donut1.classList.add('donut1');
  post0El.appendChild(donut1);

  var donuts = [donut1, donut2, donut3, donut4, donut5];
}

var leaders = new LeaderBoard();
leaders.pullFromLocal();

function promptScoreBoard(){
  var scoreBoardEl = document.getElementById('scoreBoard');
  scoreBoardEl.style.visibility = "visible";
  var winnerEl = document.getElementById('winner');
  winnerEl.textContent = "WINNER WINNER CHICKEN DINNER!";
  var pEl = document.getElementById('pTag');
  pEl.textContent = `Number of Moves: ${moves}`;
  document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    leaders.addLeader();
    document.location.assign('leaderboard.html');
  });
}


function hideScoreBoard(){
  var scoreBoardEl = document.getElementById('scoreBoard');
  scoreBoardEl.style.visibility = "hidden";


}
if(document.getElementById("x")) {
  document.getElementById("x").addEventListener('click',function(){hideScoreBoard()});
}
// function to update the minimum possible moves
function updateMinMoves() {
  var movesElement = document.getElementById('minMoves');
  var minMoves = Math.pow(2, donutCount) - 1;
  if(movesElement) {
    movesElement.textContent = `Minimum Possible Moves: ${minMoves}`;
  }
}

updateMinMoves();

function subtractDonut() {
  if(donutCount > 3) {
    donutCount--;
    reset();
  }
}

if(document.getElementById('minus-btn')) {
  document.getElementById('minus-btn').addEventListener('click',subtractDonut);
}

function addDonut() {
  if(donutCount < 5) {
    donutCount++;
    reset();
  }
}

if(document.getElementById('plus-btn')) {
  document.getElementById('plus-btn').addEventListener('click',addDonut);
}