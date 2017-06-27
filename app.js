var allScreens = [];
//array for situation
var situation = ['one', 'two', 'three', 'four', 'five', 'six'];
//array for the options that go with the situations
var option = [['a', 'b'], ['c', 'd'], ['e', 'f'], ['f', 'h'], ['i', 'j']];

//global vars
var setSit = document.getElementById('sit');
var choices = document.getElementById('opts');

function Screen(situation, action) {
  this.situation = situation;
  this.option = option;
  allScreens.push(this);
}

//instances
new Screen(situation[0], option[0]);
new Screen(situation[1], option[1]);

//render function
function render(i) {
  setSit.textContent = allScreens[i].situation;

  var buttonEl = document.createElement('button');
  buttonEl.textContent = 'a';
  buttonEl.setAttribute('id', 'choice1');
  choices.appendChild(buttonEl);

  var buttonEl = document.createElement('button');
  buttonEl.textContent = 'b';
  buttonEl.setAttribute('id', 'choice2');
  choices.appendChild(buttonEl);
}

render(1);

//clear screen
function clear(){
  choices.innerHTML = '';
  setSit.innerHTML = '';
}

//Event listener/handling for click to move to next screen
