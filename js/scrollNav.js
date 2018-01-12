(function (){
	"use strict";
	console.log("scrollNav.js connected");

var scroll = window.pageYOffset;

const toPortfolio = document.querySelector("#to-portfolio"),
	toContact = document.querySelector("#to-contact"),
	navPort = document.querySelector("#navToPort"),
	navForm = document.querySelector("#navToForm"),
	navPort2 = document.querySelector("#navToPort2"),
	navForm2 = document.querySelector("#navToForm2");
	console.log(toPortfolio, toContact);
	

function scrollPortfolio(e){
	e.preventDefault();
	TweenLite.to(window, 2, {scrollTo:{y:"#portfolio"}, ease:Power2.easeInOut});
}
function scrollContact(e){
	e.preventDefault();
	TweenLite.to(window, 2, {scrollTo:{y:"#form"}, ease:Power2.easeInOut});
}
 
toPortfolio.addEventListener("click", scrollPortfolio,false);
toContact.addEventListener("click", scrollContact,false);
navPort.addEventListener("click", scrollPortfolio,false);
navForm.addEventListener("click", scrollContact,false);
navPort2.addEventListener("click", scrollPortfolio,false);
navForm2.addEventListener("click", scrollContact,false);

	})();