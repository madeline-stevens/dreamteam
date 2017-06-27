var allScreens = [];
//array for situation
var situation = ['insert intro', 'one', 'two', 'three', 'four', 'five', 'six'];
//array for the options that go with the situations
var option = [
  ['Who is this? What are you talking about?', 'uh...ok…?'],

  ['the user selected the first action in the introductory situation; new situation\'s first action choice', 'the user selected the first action in the introductory situation; new situation\'s second action choice'],

  ['the user selected the second action in the introductory situation; new situation\'s first action choice', 'the user selected the second action in the introductory situation; new situation\'s second action choice'],

  ['f', 'h'],

  ['i', 'j'],

  ['k', 'l'],

  ['m', 'n']];

//global vars
var body = document.getElementById('body');
var setSit = document.getElementById('sit');
var action1 = document.getElementById('choice1');
var action2 = document.getElementById('choice2');

function Screen(index) {
  this.situation = situation[index];
  this.option = option[index];
  allScreens.push(this);
}

//instances
new Screen(0);
new Screen(1);
new Screen(2);
new Screen(3);
new Screen(4);
new Screen(5);
new Screen(6);

//render function
var renderedSit = document.createElement('section');

function render(i) {
  renderedSit.setAttribute('id', 's' + i);
  body.appendChild(renderedSit);

  setSit.textContent = allScreens[i].situation;

  action1.textContent = allScreens[i].option[0];

  action2.textContent = allScreens[i].option[1];

  renderedSit.appendChild(setSit);
  renderedSit.appendChild(action1);
  renderedSit.appendChild(action2);
}

render(0);

//clear screen
// function clear(){
//   renderedSit.innerHTML = '';
// }

//Event listener/handling for click to move to next screen
action1.addEventListener('click', handleAction1);
action2.addEventListener('click', handleAction2);

function handleAction1() {
  if ('s0' === renderedSit.getAttribute('id'))
  {
    render(1);
  } else if ('s1' === renderedSit.getAttribute('id'))
  {
    render(3);
  } else if ('s2' === renderedSit.getAttribute('id')) {
    render(5);
  }
}

function handleAction2() {
  if ('s0' === renderedSit.getAttribute('id'))
  {
    render(2);
  } else if ('s1' === renderedSit.getAttribute('id'))
  {
    render(4);
  } else if ('s2' === renderedSit.getAttribute('id')) {
    render(6);
  }
}
