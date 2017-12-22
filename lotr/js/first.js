(function (){
	"use strict";
	console.log("first.JS file connected!");

var augmented = document.querySelector("#augmented"),
	indexTagline = document.querySelector("#indexTagline"),
	foot = document.querySelector("#foot"),
	screenW = window.innerWidth;
	console.log(screenW);

var lotrTitle = document.querySelector("#title"),
	tl = new TimelineLite();


function init() {
	if (screenW < 640) {
		TweenMax.to(foot, 0.7,{y:120, ease:Power2.easeOut});
		TweenMax.to(augmented, 0.7,{y:120, ease:Power2.easeOut, delay:0.2});
		TweenMax.to(indexTagline, 0.7,{y:50, ease:Power2.easeOut, delay:0.4});

	} else {
		tl.from(augmented, 1,{opacity:0, y:100, ease:Back. easeOut})
			.from(lotrTitle, 0.7,{opacity:0, y:-20, scale:0.9, ease:Back. easeOut},"-=0.5")
			.from(indexTagline, 0.7,{opacity:0, scale:0.8, ease:Back.easeOut},"-=0.2");
	}
}

window.addEventListener("load", init, false);
})();