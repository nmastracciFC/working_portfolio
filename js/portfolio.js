App.portfolio => {
	console.log("portfolio.js connected");

var dev = document.querySelector("#development"),
	des = document.querySelector("#design"),
	art = document.querySelector("#artwork");

var devPage = document.querySelector("#development-page"),
	desPage = document.querySelector("#design-page"),
	artPage = document.querySelector("#artwork-page");

var rect1 = document.querySelector("#rect1"),
	rect2 = document.querySelector("#rect2"),
	rect3 = document.querySelector("#rect3"),
	name1 = document.querySelector("#name1"),
	name2 = document.querySelector("#name2"),
	name3 = document.querySelector("#name3"),
	name4 = document.querySelector("#name4");	

function showDev() {
	dev.style.color = "#555555";
	des.style.color = "";
	art.style.color = "";

	devPage.style.display = "block";
	desPage.style.display = "none";
	artPage.style.display = "none";

}

function showDes(){
	dev.style.color = "";
	des.style.color = "#555555";
	art.style.color = "";

	devPage.style.display = "none";
	desPage.style.display = "block";
	artPage.style.display = "none";
}

function showArt() {
 	dev.style.color = "";
	des.style.color = "";
	art.style.color = "#555555";

	devPage.style.display = "none";
	desPage.style.display = "none";
	artPage.style.display = "block";
 }

window.addEventListener("load", showDev, false);
dev.addEventListener("click", showDev, false);
des.addEventListener("click", showDes, false);
art.addEventListener("click", showArt, false);

};