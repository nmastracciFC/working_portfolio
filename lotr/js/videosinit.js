(function (){
	"use strict";
	console.log("videosinit JS file connected!");

var tl = new TimelineLite();

var teaser = document.querySelector("#teaser"),
	trailer = document.querySelector("#trailer"),
	play = document.querySelector("#videoControls");

function init() {
	tl.from(play, 0.7,{opacity:0, scale:0.7, rotation:45, ease:Back.easeOut})
		.from(teaser, 0.7,{opacity:0, scale:0.7, rotation:45, ease:Back.easeOut},"-=0.2")
		.from(trailer, 0.7,{opacity:0, scale:0.7, rotation:45, ease:Back.easeOut},"-=0.2");
}

window.addEventListener("load", init, false);
})();