(function (){
	"use strict";
	console.log("main JS file connected!");

var submitBtn = document.querySelector("#submitIt");

var sizeMe = document.querySelector("#sizeMe"),
	kings = document.querySelector("#kings"),
	screenW = window.innerWidth;

var tl = new TimelineLite();

function init() {
	if (screenW < 795) {
		sizeMe.style.fontSize = 60 +"px";

	} else {
		sizeMe.style.fontSize = 120 +"px";
	}
	slideIn();
}

function slideIn(){
	tl.from(kings, 1,{opacity:0, scale:0.9, ease:Power1.easeOut})
		//.from(kings, 0.8,{ scale:0.7, ease:Back.easeOut}, "-=0.9")
		.from(sizeMe, 0.9,{opacity:0, y:-20, scale:0.9, ease:Power2.easeOut}, "-=0.4");
}

function noticeMe(e) {
	submitBtn.style.opacity = 0.6;
}
function full(e) {
	submitBtn.style.opacity = 1;
}


submitBtn.addEventListener("mouseenter", noticeMe, false);
submitBtn.addEventListener("mouseout", full, false);
window.addEventListener("load", init, false);
})();