console.log("headerColour.js is attached");

const headerBox = document.querySelector("#headerColour");

const darkPink = document.querySelector("#dark-pink"),
	lightPink = document.querySelector("#light-pink"),
	peach = document.querySelector("#peach"),
	yellow = document.querySelector("#yellow");
const nLarge = document.querySelector("#en"),
	name = document.querySelector("#heading"),
	skill = document.querySelector("#sub-head");
	console.log(name, skill);
	

function parallaxHeader() {
	var scroll = window.pageYOffset;
	console.log(scroll);
	console.log(headerBox.getBoundingClientRect().bottom);
	darkPink.style.top = -scroll * 0.2 + "px";
	lightPink.style.top = scroll * 1.1 + "px";
	peach.style.top = scroll * 1.4 + "px";
	yellow.style.top = -scroll * 2 + "px";

	nLarge.style.top = scroll * 0.1 + "px";

	name.style.top = -scroll * 5 + "px";
	skill.style.top = scroll * 6 + "px";

	


	if (headerBox.getBoundingClientRect().bottom <= 350 ) {
		let splatter = document.querySelectorAll("#headerColour img");
		TweenLite.to(splatter, 0.5, {opacity:0, ease:Power1.easeOut});
		TweenLite.to(name, 0.8, {x:-500, ease:Power2.easeOut});
		TweenLite.to(skill, 0.8, {x:500, ease:Power2.easeOut});
		
	} else if (headerBox.getBoundingClientRect().bottom >= 350) {
		let splatter = document.querySelectorAll("#headerColour img");
		TweenLite.to(splatter, 1, {opacity:1, ease:Power1.easeOut});
		TweenLite.to(name, 0.8, {x:0, ease:Power2.easeOut});
		TweenLite.to(skill, 0.8, {x:0, ease:Power2.easeOut});
	}
	
	
}

window.addEventListener("scroll", function(){requestAnimationFrame(parallaxHeader);}, false);