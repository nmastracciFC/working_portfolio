(function (){
	"use strict";
	console.log("film.JS file connected!");

var frodoPhone = document.querySelectorAll(".frodoPhone"),
	filmHead = document.querySelector("#filmHead"),
	appBtn = document.querySelector("#appBtn"),
	someSize = document.querySelector("#someSize"),
	screenW = window.innerWidth;
	console.log(frodoPhone, filmHead, appBtn, someSize);

function init() {
	var tl = new TimelineLite();

	tl.from(frodoPhone, 1,{opacity:0, x:-300, rotation:45, scale:0.6, ease:Back.easeOut})
		.from(filmHead, 0.7,{opacity:0, ease:Power2.easeOut}, "-=0.5")
		.from(appBtn, 0.7,{opacity:0, ease:Power2.easeOut}, "-=0.2")
		.from(someSize, 0.7,{opacity:0, ease:Power2.easeOut}, "-=0.2");
}

window.addEventListener("load", init, false);
})();