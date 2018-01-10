App.scrollNav => {
	console.log("scrollNav.js connected");

var scroll = window.pageYOffset;

const toPortfolio = document.querySelector("#to-portfolio"),
	toContact = document.querySelector("#to-contact");
	console.log(toPortfolio, toContact);
	

function scrollPortfolio(){
		TweenLite.to(window, 2, {scrollTo:{y:"#portfolio"}, ease:Power2.easeInOut});
}
function scrollContact(){
		TweenLite.to(window, 2, {scrollTo:{y:"#form"}, ease:Power2.easeInOut});
}
 
toPortfolio.addEventListener("click", scrollPortfolio,false);
toContact.addEventListener("click", scrollContact,false);

};