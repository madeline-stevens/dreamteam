'use strict';

var allScreens = [];

//arrays for backrounds
var background = [
  //0
  ['imgs/window.jpg'],
  //1
  ['imgs/raininghouse.gif'],
  //2
  ['imgs/spookyhouse.jpg'],
  //3
  ['imgs/window.jpg'],
  //4
  ['imgs/raininghouse.gif'],
  //5
  ['imgs/spookyhouse.jpg'],
  //6
  ['imgs/window.jpg'],
  //7
  ['imgs/raininghouse.gif'],
  //8
  ['imgs/spookyhouse.jpg'],
  //9
  ['imgs/window.jpg'],
  //10
  ['imgs/raininghouse.gif'],
  //11
  ['imgs/spookyhouse.jpg'],
  //12
  ['imgs/window.jpg'],
  //13
  ['imgs/raininghouse.gif'],
  //14
  ['imgs/spookyhouse.jpg'],
  //15
  ['imgs/window.jpg'],
  //16
  ['imgs/raininghouse.gif'],
  //17
  ['imgs/spookyhouse.jpg'],
  //18
  ['imgs/window.jpg'],
  //19
  ['imgs/raininghouse.gif'],
  //20
  ['imgs/spookyhouse.jpg'],
  //21
  ['imgs/window.jpg']];

//array for situation

//Above is the jQuery used for the desired animation (is not calling anything yet)
var situation = [
  //0
  ['Have you ever caught yourself drawing a blank? You lean back in your chair and stare blankly trying to remember which room you are in and how you got there', ' and then I heard something else, something distinct, something that does indeed sound definite, the sound of a faint, crackly voice coming from a forgotten comm collecting cobwebs in the corner of this unknown room. You pick up the comm and hear this voice say...', 'Hello…? Hello? Is anyone on the other end of this?'],
  //1
  ['Oh wow! I can’t believe it! It actually connected with someone! You don’t know how relieved I am to hear another human being! Please, I need your help…', '', ''],
  //2
  ['I found this old comm. It was dead when I first discovered it. I thought I could fix it up, it looked all busted and broken, but I guess being a network engineer has its perks, huh. I’ve been on my own for almost a few hours now and I was beginning to lose hope that I’d ever be able to find a sane human being on this forsaken rock!', '', ''],
  //3
  ['Sorry, sorry, I realize that I’m a complete stranger and getting a call right of the blue from a random person sounds pretty sketchy huh? But please don’t hang up! I need your help badly! My name is Sammy and I was assigned to checkout the frequent blackouts here in Graham, Pierce County, Washington state. The call specifically mentioned this house’s address. There have been unsettling reports about this place, maybe it’s just local superstition, I honestly don’t know, but what I do know is that I want to get out of this house and being stuck in the basement is about the exact opposite of getting out.', '', ''],
  //4
  ['There’s a single door, but it’s locked, and it’s heavy, but maybe I can find something to bust the hinges. Give me a few minutes to check out the area… [Sammy is exploring]', 'I had to give a few minutes to adjust my eyes to the dimly lit garage, but now I can see that there is a rather large air vent high up on the wall above a tool rack. The metal track that the garage door is on is rusted to the point where the metal’s fused together. The short of it is that that’s not an option unless I want to make a lot of noise, and I don’t want to. I could try to clear out some of the debris in front of the door that, I assume, opens into the house itself.', 'Alright, I found a screw driver and unscrewed the hinges. It took a while, but I managed to get the hinges off. What I wasn’t able to do, was stop the door from falling on the floor and making a really loud bang. I don’t think I’ve ever felt so unsettled by a combination of a really loud noise followed by absolute silence.'],
  //5
  ['Believe me, if I were in your shoes, I’d probably have never picked up in the first place. But I’m begging you to just help me out here, or at least keep me company. Let me look around and find out if there’s some way I can escape from here. [Sammy is exploring]', 'I discovered a door, it’s heavy and the door has no handle on this side. It’s just a key lock. The hinges look breakable though, I’ll see if I can find something to break them...', 'Alright, I found a screw driver and unscrewed the hinges. It took a while, but I managed to get the hinges off. What I wasn’t able to do, was stop the door from falling on the floor and making a really loud bang. I don’t think I’ve ever felt so unsettled by a combination of a really loud noise followed by absolute silence.'],
  //6
  ['I wish I was, but unfortunately, this house is old, supposedly built by some lunatic baron back in the 30’s. This town is has a huge mining quarry and the basement is connected to a long narrow tunnel that travels to the central mine, which is how I got in. I guess this guy was the local foreman or something. Clearly he had a lot of money.', 'Alright the door led into a hallway, I haven’t been inside this house yet...well, until now of course. Yeah, I guess all the windows are boarded up because I can’t see any light. Either that or it’s dark outside and I spent more time in that basement than I realize.', ''],
  //7
  ['I honestly have no idea why my boss chose me. I’m just going to assume that he doesn’t like me very much. This place is remote, and apparently there are no other electrical repair companies nearby!', 'I guess I’m going through the mansion then. *Sigh* Alright, lets do this', 'Okay, the door led into a hallway, I haven’t been inside this house yet...well, until now of course. What Yeah, I guess all the windows are boarded up because I can’t see any light. Either that or it’s dark outside and I spent more time in that basement than I realize.'],
  //8
  ['Ah of course! Thanks for reminding me. I just remembered, that I have my toolkit flashlight with me. I’m not sure how much longer the batteries are going to last since I used it while attempting to repair the dilapidated fuse box, the comm, and walking 	down that long tunnel, but it should have enough juice for now at least. I will continue to do some exploring and get back to you in a few… [Sammy is exploring]', '', ''],
  //9
  ['Alright, I can’t see anything very well at all, but I will make the valiant attempt...(crash) OUCH!', '', ''],
  //10
  ['Augh! It’s fine, I just tripped over some wood scantlings and fell flat on my face! But I’m alright now I think, just a bruise here and there. If only I have a light or something...Ah! I remember now! I have a flashlight in my pocket. It’s mostly drained because I used it a lot today, but it should have enough juice for now at least. I will continue to do some exploring and get back to you in a few…', 'As I was walking down the hall, I kept passing by all these doors. I wasn’t quite sure which one I should try so I just kind of looked into each one. Honestly, they all look about the same, empty, except for a few chairs, tables, a book stand here or there. So far, none of the doors lead to the outside and I haven’t seen any windows yet, boarded up or otherwise. I think I’m in the living room now. There’s four doors in here, including the one I just entered from, and still no windows... What was that!?', ''],
  //11
  ['That door, it just closed behind me! I left it open, like wide open to leave a sort of trail back in case I needed to retrace my steps, but it just shut!', '', ''],
  //12
  ['Yeah.. I mean, it could have been someone...or something… or it could just be my imagination getting the better of me too; watching horror movies late at night and playing scary video games too long will get to you eventually, right?', '', ''],
  //13
  ['*creek of door opening* AHHHHHHHHHHHH', '', ''],
  //14
  ['Okay...huff... huff…I am underneath the dining table right now. ~~~silence~~~', 'Hey, hey, I hear footsteps coming from outside the door! What should I do?', ''],
  //15
  ['*The door suddenly opens!* He is chasing me! AHHHH', '', ''],
  //16
  ['*creek of door opening* Hey.... someone is walking in.. what should I — AHHHHHH', '', ''],
  //17
  ['Yeah, of course! I will definitely check the console!', '', ''],
  //18
  ['Right! I’ll check out the… What’s this? The corner of the carpet is pulled back and it looks like there is a trap door here. What should I do?', '', ''],
  //19
  ['Oh no! The bottom falls out from beneath you and you find yourself falling endlessly. It seems you have found yourself in an infinite loop. There’s only one thing to do.... return!', '', ''],
  //20
  ['You suddenly wake up and find yourself in Code Fellows 201 class with a pool of drool on your desk. Everyone’s eyes turn to you distracted by the loud sound you made from your sudden awakening.', 'Congratulations! You have really taken your learning to the next step!', ''],
  //21
  ['Everything went dark. It happened so fast.', 'When you do not get a response from the other end, you realized you have failed to save Sammy.', '']];
//array for the options that go with the situations

var option = [
  //0
  ['A)...um...hello?', 'B) Who is this?'],
  //1
  ['A) Alright I’ll help you.', 'B) How on earth did you get a hold on my number?'],
  //2
  ['A) Who is this? What are you talking about?', 'B) uh...ok…you still haven’t told me who you are yet…?'],
  //3
  ['A) Alright, what do you see around you? You haven’t tried any doors?', 'B) I still don’t know if I believe this…'],
  //4
  ['A) Aren’t you free now? Just exit the house and you’re done, right?', 'B) Do you know why you were assigned to go to this house in the first place?'],
  //5
  ['A) Aren’t you free now? Just exit the house and you’re done, right?', 'B) Do you know why you were assigned to go to this house in the first place?'],
  //6
  ['A) Try to find a light source.', 'B) See if you can find the front door.'],
  //7
  ['A) Try to find a light source.', 'B) See if you can find the front door.'],
  //8
  ['A) Are you alright?', 'B) What happened?'],
  //9
  ['A) Are you alright?', 'B) What happened?'],
  //10
  ['A) What?', 'B) Are you okay?'],
  //11
  ['A) Open a door and go through it!', 'B) Find a place to hide!'],
  //12
  ['A) Maybe you should go check on it then.', 'B) I’m sure, keep focused and try one of the other doors.'],
  //13
  ['A) Hello?', 'B) Are you okay?!'],
  //14
  ['A) RUNNN', 'B) Just stay there and keep quiet.'],
  //15
  ['A) Hello?', 'B) Are you okay?!'],
  //16
  ['A) Hello?', 'B) Are you okay?!'],
  //17
  ['A) Wait… what?', 'B) Um… I am not sure what is going on but, yeah, just check the console.'],
  //18
  ['A) Go check it!', 'B) Open the door and enter!'],
  //19
  ['A) Wait...  what?', 'B) Then, I guess return!'],
  //20
  ['A) Play again', 'B) Go back to home'],
  //21
  ['A) Play again', 'B) Go back to home']];

//global vars
var gameContainer = document.getElementById('gameContainer');
var setBack = document.getElementById('bkgImg');
var setResp = document.getElementById('paragraph1');
var setSit = document.getElementById('situationParagraph');
var extra = document.getElementById('paragraph3');

var action1 = document.getElementById('choice1');
var action2 = document.getElementById('choice2');

function Screen(index) {
  this.background = background[index];
  this.situation = situation[index];
  this.option = option[index];

  allScreens.push(this);
}

//instances
for (var i = 0; i < situation.length; i++) {
  new Screen(i);
}

//render function
var renderedSit = document.createElement('section');
function render(i) {
  renderedSit.setAttribute('id', 's' + i);
  console.log('renderedSit runs', renderedSit);
  gameContainer.appendChild(renderedSit);

  // setBack.setAttribute('src', allScreens[i].background);

  setResp.textContent = allScreens[i].situation[0];
  setSit.textContent = allScreens[i].situation[1];
  extra.textContent = allScreens[i].situation[2];

  action1.textContent = allScreens[i].option[0];
  action2.textContent = allScreens[i].option[1];

  // renderBack.appendChild(setBack);
  renderedSit.appendChild(setResp);
  renderedSit.appendChild(setSit);
  renderedSit.appendChild(extra);
  renderedSit.appendChild(action1);
  renderedSit.appendChild(action2);
}

if(localStorage.currentScreen) {
  for (var i = 0; i < allScreens.length; i++) {
    if (allScreens[i].situation[0] === JSON.parse(localStorage.currentScreen).situation[0]) {
      render(i);
    }
  }
} else {
  render(0);
}

//Event listener/handling for click to move to next screen
action1.addEventListener('click', handleAction1);
action2.addEventListener('click', handleAction2);

function handleAction1() {
  if ('s0' === renderedSit.getAttribute('id'))
  {
    render(1);
  } else if ('s1' === renderedSit.getAttribute('id'))
  {
    render(2);
  } else if ('s2' === renderedSit.getAttribute('id')) {
    render(3);
  } else if ('s3' === renderedSit.getAttribute('id')) {
    render(4);
  } else if ('s4' === renderedSit.getAttribute('id') || 's5' === renderedSit.getAttribute('id')) {
    render(6);
  } else if ('s6' === renderedSit.getAttribute('id') || 's7' === renderedSit.getAttribute('id')) {
    render(8);
  } else if ('s8' === renderedSit.getAttribute('id') || 's9' === renderedSit.getAttribute('id')) {
    render(10);
  } else if ('s10' === renderedSit.getAttribute('id')) {
    render(11);
  } else if ('s11' === renderedSit.getAttribute('id')) {
    render(13);
  } else if ('s14' === renderedSit.getAttribute('id')) {
    render(15);
  } else if ('s13' === renderedSit.getAttribute('id') || 's15' === renderedSit.getAttribute('id') || 's16' === renderedSit.getAttribute('id')) {
    render(21);
  } else if ('s12' === renderedSit.getAttribute('id') || 's18' === renderedSit.getAttribute('id')) {
    render(17);
  } else if ('s17' === renderedSit.getAttribute('id') || 's19' === renderedSit.getAttribute('id')) {
    render(20);
  } else if ('s20' === renderedSit.getAttribute('id') || 's21' === renderedSit.getAttribute('id')) {
    render(0);
  }
  for (var i = 0; i < allScreens.length; i++) {
    if(('s' + i) === renderedSit.getAttribute('id')) {
      localStorage.currentScreen = JSON.stringify(allScreens[i]);
    }
  }
}

function handleAction2() {
  if ('s0' === renderedSit.getAttribute('id'))
  {
    render(1);
  } else if ('s1' === renderedSit.getAttribute('id'))
  {
    render(2);
  } else if ('s2' === renderedSit.getAttribute('id')) {
    render(3);
  } else if ('s3' === renderedSit.getAttribute('id')) {
    render(5);
  } else if ('s4' === renderedSit.getAttribute('id') || 's5' === renderedSit.getAttribute('id')) {
    render(7);
  } else if ('s6' === renderedSit.getAttribute('id') || 's7' === renderedSit.getAttribute('id')) {
    render(9);
  } else if ('s8' === renderedSit.getAttribute('id') || 's9' === renderedSit.getAttribute('id')) {
    render(10);
  } else if ('s10' === renderedSit.getAttribute('id')) {
    render(12);
  } else if ('s11' === renderedSit.getAttribute('id')) {
    render(14);
  } else if ('s13' === renderedSit.getAttribute('id') || 's15' === renderedSit.getAttribute('id') || 's16' === renderedSit.getAttribute('id')) {
    render(21);
  } else if ('s14' === renderedSit.getAttribute('id')) {
    render(16);
  } else if ('s12' === renderedSit.getAttribute('id')) {
    render(18);
  } else if ('s17' === renderedSit.getAttribute('id') || 's19' === renderedSit.getAttribute('id')) {
    render(20);
  } else if ('s18' === renderedSit.getAttribute('id')) {
    render(19);
  } else if ('s20' === renderedSit.getAttribute('id') || 's21' === renderedSit.getAttribute('id')) {
    action2.onclick = function(){
      window.location.href = 'index.html';
    };
    action2.onclick(); //ALSO NEED TO CLEAR LOCAL STORAGE so the next person has a clean slate
  }
  for (var i = 0; i < allScreens.length; i++) {
    if(('s' + i) === renderedSit.getAttribute('id')) {
      localStorage.currentScreen = JSON.stringify(allScreens[i]);
    }
  }
}

var textDiv = $("#textDiv"),
    sentence = textDiv.html().split(""),
    tl = new TimelineMax({repeat:10, repeatDelay:0.4, yoyo:true});

TweenLite.set(textDiv, {css:{perspective:500, perspectiveOrigin:"50% 50%", transformStyle:"preserve-3d"}});
textDiv.html("");

$.each(sentence, function(index, val) {
			if(val === " ") {
				val = "&nbsp;";			}
			var letter = $("<span/>", {id : "txt" + index}).html(val).appendTo(textDiv);
   tl.to(letter, 1, {autoAlpha:1, ease:Back.easeOut,  fadeIn:0, transformOrigin:"50% 50% -20"}, index * 0.05);
});
