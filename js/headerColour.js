console.log("headerColour.js is attached");

const headerBox = document.querySelector("#headerColour"),
	splatter = document.querySelectorAll(".stay-put");;
const nLarge = document.querySelector("#en"),
	name = document.querySelector("#heading"),
	skill = document.querySelector("#sub-head");
	// console.log(name, skill);
//TULIPS
const tulip1 = document.querySelector("#tulip1"),	
	tulip2 = document.querySelector("#tulip2"),
	tulip3 = document.querySelector("#tulip3"),
	tulip4 = document.querySelector("#tulip4"),
	tulip5 = document.querySelector("#tulip5"),
	tulip6 = document.querySelector("#tulip6"),
	nLogo = document.querySelector("#nLogo");


function parallaxHeader() {
	var scroll = window.pageYOffset;
	// console.log(scroll);
	// console.log(headerBox.getBoundingClientRect().bottom);

	tulip1.style.top = -scroll * 0.2 + "px";	
	tulip2.style.top = -scroll * 0.4 + "px";
	tulip3.style.top = -scroll * 0.6 + "px";
	tulip4.style.top = -scroll * 0.8 + "px";
	tulip5.style.top = -scroll * 1 + "px";
	tulip6.style.top = -scroll * 1.2 + "px";
	nLogo.style.top = scroll * 0.8 + "px";


	if (headerBox.getBoundingClientRect().bottom <= 350 ) {
		TweenLite.to(splatter, 0.5, {opacity:0, ease:Power1.easeOut, onComplete: hide});
		// TweenLite.to(name, 0.8, {x:-500, ease:Power2.easeOut});
		// TweenLite.to(skill, 0.8, {x:500, ease:Power2.easeOut});

		function hide(){
			nLogo.classList.add("hidden");
		}
		
	} else if (headerBox.getBoundingClientRect().bottom >= 350) {
		function show(){
			nLogo.classList.remove("hidden");
		}
		show();
		TweenLite.to(splatter, 1, {opacity:1, ease:Power1.easeOut});
		// TweenLite.to(name, 0.8, {x:0, ease:Power2.easeOut});
		// TweenLite.to(skill, 0.8, {x:0, ease:Power2.easeOut});
	}
	
	
}

window.addEventListener("scroll", function(){requestAnimationFrame(parallaxHeader);}, false);