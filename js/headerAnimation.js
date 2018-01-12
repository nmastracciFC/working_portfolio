console.log("headerAnimation.js is attached");

function organize() {
	let nav = document.querySelector("nav");
	let headingH1 = document.querySelector("#heading h1");
	let headingH3 = document.querySelector("#heading h3");
	let headingH4 = document.querySelectorAll("#heading h4");
	let eight = document.querySelector("#eight");
	let subHeadH2 = document.querySelector("#sub-head h2");
	let subHeadH3 = document.querySelector("#sub-head h3");
	let subHeadH4 = document.querySelector("#sub-head h4");

	TweenLite.from(nav, 0.7, {y:-100, ease:Power2.easeOut});
	TweenLite.from(headingH1, 1, {opacity:0, y:50, ease:Power2.easeOut, delay:0.6});
	TweenLite.from(headingH3, 1, {opacity:0, x:-100, ease:Power2.easeOut, delay:1.2 });
	TweenLite.from(headingH4, 0.8, {opacity:0, x:-50, ease:Power2.easeOut, delay:1.5});
	TweenLite.from(eight, 4, {opacity:0, ease:Power2.easeIn, delay: 0.5});
	TweenLite.from(subHeadH2, 1, {opacity:0, y:-50, ease:Power2.easeOut, delay:1.7});
	TweenLite.from(subHeadH3, 1, {opacity:0, y:-50, ease:Power2.easeOut, delay:1.9});
	TweenLite.from(subHeadH4, 1, {opacity:0, y:-50, ease:Power2.easeOut, delay:2.1});

}


window.addEventListener("load", organize, false);
// window.addEventListener("scroll", revealPort, false);