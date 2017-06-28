var allScreens = [];

//array for situation
var situation = [
  //0
  ['Have you ever caught yourself drawing a blank; the feeling of finding yourself  doing something, and yet, you don’t remember what that something was. , You lean back in your chair and stare blankly at the ceiling, watching the fan above you turn lazily, making a soft creak  as it continues its endless specific intent.. It’s somehow, relatable to the situation; chasing the thought  that you were supposed to be doing with no particular understanding of why…', 'And then I heard something else, something distinct, something that does indeed sound definite, the sound of footsteps crunching slowly on the loose gravel path the lead towards the house.', 'Hello…? Hello? Is anyone on the other end of this?'],
  //1
  ['Oh wow! I can’t believe it! It actually connected with someone! You don’t know how relieved I am to hear another human being! Please, I need your help…', '', ''],
  //2
  ['I found this old comm. It was dead when I first discovered it. I thought I could fix it up, it looked all busted and broken, but I guess being a network engineer has its perks, huh. I’ve been on my own for almost a few hours now and I was beginning to lose hope that I’d ever be able to find a sane human being on this forsaken rock!', '', ''],
  //3
  ['Sorry, sorry, I realize that I’m a complete stranger and getting a call right of the blue from a random person sounds pretty sketchy huh. But please don’t hang up! I need your help badly! My name is (INSERT CHARACTER NAME HERE) and I was assigned to checkout the frequent blackouts here in Graham, Pierce County, Washington state. The call specifically mentioned this house’s address. There have been unsettling reports about this place, maybe it’s just local superstition, I honestly don’t know, but what I do know is that I want to get out of this house and being stuck in the basement is about the exact opposite of getting out.', '', ''],
  //4
  ['There’s a single door, but it’s locked, and it’s heavy, but maybe I can find something to bust the hinges. Give me a few minutes to check out the area… [ NAME is exploring ]', 'I had to give a few minutes to adjust my eyes to the dimly lit garage, but now I can see that there is a rather large air vent high up on the wall above a tool rack. The metal track that the garage door is on is rusted to the point where the metal’s fused together. The short of it is that that’s not an option unless I want to make a lot of noise. And I don’t. I could try to clear out some of the debris in front of the door that, I assume, opens into the house itself.', 'Alright, I found a screw driver and unscrewed the hinges. It took a while, but I managed to get the hinges off. What I wasn’t able to do, was stop the door from falling on the floor and making a really loud bang. I don’t think I’ve ever felt so unsettled by a combination of a really loud noise followed by absolute silence.'],
  //5
  ['Believe me, if I were in your shoes, I’d probably have never picked up in the first place. But I’m begging you to just help me out here, or at least keep me company. This place has an unsettling air to it. Let me look around and find out if there’s some way I can escape from here. [ NAME is exploring ]', 'I discovered a door, it’s heavy and the door has no handle on this side. It’s just a key lock. The hinges look breakable though, I’ll see if I can find something to break them...', 'Alright, I found a screw driver and unscrewed the hinges. It took a while, but I managed to get the hinges off. What I wasn’t able to do, was stop the door from falling on the floor and making a really loud bang. I don’t think I’ve ever felt so unsettled by a combination of a really loud noise followed by absolute silence.'],
  //6
  ['I wish I was, but unfortunately, this house is old, supposedly built by some lunatic baron back in the 30’s. This town is has a huge mining quarry and the basement is connected to a long narrow tunnel that travels to the central mine, which is how I got in. I guess this guy was the local foreman or something. Clearly he had a lot of money.', 'I guess I’m going through the mansion then… Did I mention the fact that I don’t like big, old, spooky-looking houses? *Sigh* Alright, lets do this', 'Alright the door led into a hallway, I haven’t been inside this house yet...well, until now of course, but like I said, I hate spooky houses….and now I’m in one. Wonderful. What was I saying? Yeah, I guess all the windows are boarded up because I can’t see any light. Either that or it’s dark outside and I spent more time in that basement than I realize. Wonderful, I’m walking through a spooky house, it’s dark in here, and it’s probably dark outside now too.'],
  //7
  ['I honestly have no idea why my boss chose me. I’m just going to assume he’s just a big thumb sucker, along with the fact that he doesn’t like me very much. If I caught myself going out with my wife, I’d probably hate me too. This place is remote, and apparently can’t afford to have it’s own flippin’ electrical repair company!', 'I guess I’m going through the mansion then… Did I mention the fact that I don’t like big, old, spooky-looking houses? *Sigh* Alright, lets do this', 'Alright the door led into a hallway, I haven’t been inside this house yet...well, until now of course, but like I said, I hate spooky houses….and now I’m in one. Wonderful. What was I saying? Yeah, I guess all the windows are boarded up because I can’t see any light. Either that or it’s dark outside and I spent more time in that basement than I realize. Wonderful, I’m walking through a spooky house, it’s dark in here, and it’s probably dark outside now too.'],
  //8
  ['Ah of course! Thanks for reminding me. I just remembered, that I have my toolkit flashlight with me. I’m not sure how much longer the batteries are going to last since I used it while attempting to repair the dilapidated fuse box, the comm, and walking 	down that long tunnel, but it should have enough juice for now at least. I will continue to do some exploring and get back to you in a few… [NAME is exploring ]', '', ''],
  //9
  ['Alright, I can’t see anything very well at all, but I will make the valiant attempt….(crash) OUCH!', '', ''],
  //10
  ['Augh! It’s fine, I just tripped over some wood scantlings and fell flat on my face! But I’m alright now I think, just a bruise here and there. If only I have a light or something...Ah! I remember now! I have a flashlight in my pocket. It’s mostly drained because I used it a lot today, but it should have enough juice for now at least. I will continue to do some exploring and get back to you in a few…', 'As I was walking down the hall, I kept passing by all these doors. I wasn’t quite sure which one I should try so I just kind of looked into each one. Honestly, they all look about the same, empty, except for a few chairs, tables, a book stand here or there. So far, none of the doors lead to the outside and I haven’t seen any windows yet, boarded up or otherwise. This mansion might be a lot bigger than it appeared to be at a distance. I think I’m in the living room now. There’s four doors in here, including the one I just entered from, and still no windows… What was that!?', ''],
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
  ['put in message that indicates the user failed', '', '']];
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
  ['A) Play again', 'B) Go back to menu'],
  //21
  ['A) Play again', 'B) Go back to menu']];

//global vars
var body = document.getElementById('body');
var setResp = document.getElementById('response');
var setSit = document.getElementById('sit');
var extra = document.getElementById('extra');

var action1 = document.getElementById('choice1');
var action2 = document.getElementById('choice2');

function Screen(index) {
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
  body.appendChild(renderedSit);
  setResp.textContent = allScreens[i].situation[0];
  setSit.textContent = allScreens[i].situation[1];
  extra.textContent = allScreens[i].situation[2];

  action1.textContent = allScreens[i].option[0];
  action2.textContent = allScreens[i].option[1];

  renderedSit.appendChild(setResp);
  renderedSit.appendChild(setSit);
  renderedSit.appendChild(extra);
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
<<<<<<< HEAD
    //GO TO MENU
=======
    action2.onclick = function(){
      window.location.href = 'index.html';
    };
    action2.onclick();
>>>>>>> bf93233d072bf7124aa0ae311ac67ab9c108d55e
  }
}
