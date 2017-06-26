var allScreens = [];
//array for situation
var situation = ['one', 'two', 'three'];
//array for the options that go with the situations
var option = [['a', 'b'], ['c', 'd'], ['e', 'f']];

function Screen(situation, action) {
  this.situation = situation;
  this.option = option;
  allScreens.push(this);
}

//render function

//clear screen

//Event listener/handling for click to move to next screen
