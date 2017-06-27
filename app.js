var allScreens = [];

//array for situation
var situation = ['one', 'two', 'three', 'four', 'five', 'six'];

//array for the options that go with the situations
var action = [['a', 'b'], ['c', 'd'], ['e', 'f'], ['g', 'h'], ['i', 'j'], ['k', 'l']];

//global vars
var setSit = document.getElementById('sit');
var choices = document.getElementById('opts');

function Screen(situation, action) {
  this.situation = situation;
  this.action = action;
  allScreens.push(this);
}

//instances
new Screen(situation['one'], option['a', 'b']);
new Screen(situation['two'], option['c', 'd']);
new Screen(situation['three'], option['e', 'f']);
new Screen(situation['four'], option['g', 'h']);
new Screen(situation['five'], option['i', 'j']);
new Screen(situation['six'], option['k', 'l']);

//render function
function render(i) {
  setSit.textContent = allScreens[i].situation;

  var buttonEl = document.createElement('button');
  buttonActionaEl.textContent = 'a';
  buttonEl.setAttribute('id', 'choice1');
  choices.appendChild(buttonEl);

  var buttonEl = document.createElement('button');
  buttonActionbEl.textContent = 'b';
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
