(function (){
	"use strict";
	console.log("main JS file connected!");

var hamburg = document.querySelector("#hamburg"),
	barMenu = document.querySelector(".barMenu"),
	overIt = document.querySelector(".overIt");
// console.log(hamburg, barMenu, overIt);

function menuToggle(e) {
	if (barMenu.style.display==="none"){
		TweenMax.to(barMenu, 0.5, {display:"block", opacity:1,  ease:Power1.easeOut});
		//barMenu.style.display="block";

	} else {
		//barMenu.style.display = "none";
		TweenMax.to(barMenu, 0.5, {display:"none", opacity:0,  ease:Power1.easeOut});
	}
}

hamburg.addEventListener("click", menuToggle, false);
})();
