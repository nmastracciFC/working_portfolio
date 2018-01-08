(function() {
	"use strict";
	// console.log("videos.js connected")

var video, 
	playPauseBtn, 
	teaser, 
	trailer;
var screenW = window.innerWidth;

function init(){
	if (screenW < 640){
		playSm();
	} else if (screenW > 640 && screenW <1024) {
		playMed();
	} else {
		playLg();
	}
}
function playSm(){
	video = document.querySelector("#teaserTrailerSm");
	playPauseBtn = document.querySelector("#playVideo");
	playPauseBtn.addEventListener("click", playPauseSm, false);
	
	teaser = document.querySelector("#teaser");
	trailer = document.querySelector("#trailer");
	teaser.addEventListener("click", swapVidSm, false);
	trailer.addEventListener("click", swapVidSm, false);
}
function swapVidSm(e){
	video.load();
	var vidSource = video.querySelector("source");
	if(e.currentTarget.id === "teaser"){
		vidSource.src = "video/lotr_appTeaser-sm.mp4";
	} else {
		vidSource.src = "video/lotr_appTrailer-sm.mp4";
	}
	video.play();
}

function playPauseSm(e){
	video.currentTime = 0;
	if (video.paused) {
		video.play();
		e.currentTarget.innerHTML = "Pause";
	}else{
		video.pause();
		e.currentTarget.innerHTML = "Play";
	}
}
function playMed(){
	video = document.querySelector("#teaserTrailerMed");
	playPauseBtn = document.querySelector("#playVideo");
	playPauseBtn.addEventListener("click", playPauseMed, false);
	
	teaser = document.querySelector("#teaser");
	trailer = document.querySelector("#trailer");
	teaser.addEventListener("click", swapVidMed, false);
	trailer.addEventListener("click", swapVidMed, false);
}
function swapVidMed(e){
	video.load();
	var vidSource = video.querySelector("source");
	if(e.currentTarget.id === "teaser"){
		vidSource.src = "video/lotr_appTeaser-med.mp4";
	} else {
		vidSource.src = "video/lotr_appTrailer-med.mp4";
	}
	video.play();
}

function playPauseMed(e){
	video.currentTime = 0;
	if (video.paused) {
		video.play();
		e.currentTarget.innerHTML = "Pause";
	}else{
		video.pause();
		e.currentTarget.innerHTML = "Play";
	}
}
function playLg(){
	video = document.querySelector("#teaserTrailer");
	playPauseBtn = document.querySelector("#playVideo");
	playPauseBtn.addEventListener("click", playPauseLg, false);
	
	teaser = document.querySelector("#teaser");
	trailer = document.querySelector("#trailer");
	teaser.addEventListener("click", swapVidLg, false);
	trailer.addEventListener("click", swapVidLg, false);
}

function swapVidLg(e){
	video.load();
	var vidSource = video.querySelector("source");
	if(e.currentTarget.id === "teaser"){
		vidSource.src = "video/lotr_appTeaser.mp4";
	} else {
		vidSource.src = "video/lotr_appTrailer.mp4";
	}
	video.play();
}

function playPauseLg(e){
	video.currentTime = 0;
	if (video.paused) {
		video.play();
		e.currentTarget.innerHTML = "Pause";
	}else{
		video.pause();
		e.currentTarget.innerHTML = "Play";
	}
}

window.addEventListener("load", init, false);

})();