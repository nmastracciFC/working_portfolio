(function() {        
  "use strict";
  console.log("trivia.JS is attached");

var q1 = document.querySelector("#q1"),
	q2 = document.querySelector("#q2"),
  	q3 = document.querySelector("#q3"),
  	r1 = document.querySelector("#r1"),
  	r2 = document.querySelector("#r2"),
  	r3 = document.querySelector("#r3"),
  	submitIt = document.querySelector("#submitIt");

var trivia = document.querySelector("#trivia");
function init(){
	TweenMax.from(trivia, 1.5,{opacity:0, scale:0.8, y:-20, ease:Elastic.easeOut});

}

function tally(e){
	e.preventDefault();
	// console.log("tally fired");
	// console.log(q1.value);
	if (q1.value == "you haven't aged a day") {
		r1.innerHTML = "Yes! Great Job!";
	} else {
		r1.innerHTML = "wow... that's wrong.";
	}

	if (q2.value == "one ring to rule them all, one ring to find them, one ring to bring them all and in the darkness bind them") {
		r2.innerHTML = "Phew... that was a lot of typing but you got it right";
	} else {
		r2.innerHTML = "So close. HINT: commas...";
	}

	if (q3.value == "let's do that again") {
		r3.innerHTML = "HOW DID YOU KNOW THAT!?";
	} else {
		r3.innerHTML = "Definitely not.";
	}

}

submitIt.addEventListener("click", tally, false);
window.addEventListener("load", init, false);
})();