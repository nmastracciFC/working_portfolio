console.log("headerColour.js is attached");

var darkPink = document.querySelector("#dark-pink"),
	lightPink = document.querySelector("#light-pink"),
	peach = document.querySelector("#peach"),
	yellow = document.querySelector("#yellow");
	console.log(darkPink, lightPink, peach, yellow);

// function parallaxHeader() {
// 	var scroll = window.pageYOffset;
// 	seven.style.top = -scroll * 1 + "px";
// 	six.style.top = -scroll * 1.5 + "px";
// 	five.style.top = -scroll * 2 + "px";
// 	four.style.top = -scroll * 2.5 + "px";
// 	three.style.top = -scroll * 3 + "px";
// 	two.style.top = -scroll * 4 + "px";
// 	one.style.top = -scroll * 5 + "px";
	
// }

function parallaxHeader() {
	var scroll = window.pageYOffset;
	darkPink.style.top = scroll * 0.2 + "px";
	lightPink.style.top = -scroll * 0.5 + "px";
	peach.style.top = scroll * 0.8 + "px";
	yellow.style.top = -scroll * 1 + "px";
	
	
}

window.addEventListener("scroll", function(){
	requestAnimationFrame(parallaxHeader);
	}, false);