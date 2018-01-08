(function (){
	"use strict";
	console.log("scrollNav.js connected");

var scroll = window.pageYOffset;

const toPortfolio = document.querySelector("#to-portfolio"),
	toContact = document.querySelector("#to-contact");
	console.log(toPortfolio, toContact);
	

function scrollNav(e){
	toPortfolio.preventDefault();
	TweenLite.to(window, 2, {scrollTo:{y:toPortfolio}})
 
}
 
toPortfolio.addEventListener("scroll", scrollNav,false);


	})();