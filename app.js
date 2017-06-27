var allScreens = [];

//array for situation
var situation = ['one', 'two', 'three', 'four', 'five', 'six'];

//array for the actions that go with the situations
var action = [['a', 'b'], ['c', 'd'], ['e', 'f'], ['g', 'h'], ['i', 'j'], ['k', 'l']];

//global vars
var setSit = document.getElementById('sit');
var choices = document.getElementById('act');

function Screen(situation, action) {
  this.situation = situation;
  this.action = action;
  allScreens.push(this);
}

//instances
new Screen(situation['one'], action['a', 'b']);
new Screen(situation['two'], action['c', 'd']);
new Screen(situation['three'], action['e', 'f']);
new Screen(situation['four'], action['g', 'h']);
new Screen(situation['five'], action['i', 'j']);
new Screen(situation['six'], action['k', 'l']);

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

render();

//clear screen
function clear(){
  choices.innerHTML = '';
  setSit.innerHTML = '';

  if (setSit.innerHTML = 'onw' && choices.innerHTML = 'a')

}

//Event listener/handling for click to move to next screen
