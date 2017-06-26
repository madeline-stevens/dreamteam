var allScreens = [];
//array for situation
var situation = ['one', 'two', 'three', 'four', 'five', 'six'];
//array for the options that go with the situations
var option = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];

//global vars
var setSit = document.getElementById('sit');
var choices = document.getElementById('opts');

function Screen(situation, action) {
  this.situation = situation;
  this.option = option;
  allScreens.push(this);
}

//render function
function render(index) {
  setSit.textContent = situation[index];

  var buttonEl = document.createElement('button');
  buttonEl.textContent = 'test';
  choices.appendChild(buttonEl);

  var buttonEl = document.createElement('button');
  buttonEl.textContent = 'test';
  choices.appendChild(buttonEl);

  var buttonEl = document.createElement('button');
  buttonEl.textContent = 'test';
  choices.appendChild(buttonEl);
}

render(1);

//clear screen

//Event listener/handling for click to move to next screen
