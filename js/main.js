(function (){
	"use strict";
	console.log("main.js connected");

const xhr = new XMLHttpRequest();

	var toBox = document.querySelector(".to-box");
	var button = document.querySelector(".ajax");



	function getImage() {
		const url = './admin/scripts/getPics.php?allPics='+ this.id;
//the fetch API uses new Javascript Promise API
	fetch(url) //do an ajax call with fetch
		.then((resp) => resp.json()) //response is JSON object
		.then(({ pieces_desc, likeness_path}) => {
			let pDesc = document.querySelector("#ajaxDesc").textContent = pieces_desc;
			let imgPath = document.querySelector("#ajaxPic").textContent = likeness_path;
			console.log(pDesc, imgPath);
			
//on the image you clicked take the class off
//template string will look at whatever is in our model field 
		
		}) 
		.catch(function(error) {
			//catches any error and reports it to the database
			console.log(error);
		});
	}

	// function getImage(){
	// 	const url = './admin/scripts/getPics.php?allPics';

	// 	fetch(url)
	// 	.then((resp) => resp.json()) //response is JSON object
	// 	.then((data) => {processImage(data);}) //call the process function
	// 	.catch(function(error) {
	// 		//catches any error and reports it to the database
	// 		console.log(error);
	// 	});
	// }

	// function processImage(data) {
	// 	const{pieces_desc, likeness_path} = data;
	// 	console.log(data);

	// 	// let pDesc = document.querySelector(".lightbox-desc").textContent = pieces_desc;
	// 	// let imgPath = document.querySelector(".this-looks-great").textContent = likeness_path;
	// 	let pDesc = document.querySelector("#ajaxDesc").textContent = pieces_desc;
	// 	let imgPath = document.querySelector("#ajaxPic").textContent = likeness_path;
	// 	console.log(pDesc, imgPath);
	// }


function lightboxMe(currentIndex, currentObject) {
	let coverUp = window.innerHeight;
	let coverAcross = window.innerWidth;
	console.log(coverUp, coverAcross);
	// debugger;
	
	//move window to the top every time we click - quick bug fix
	// window.scrollTo(0,0);
	document.body.style.overflow = "hidden";

	//trigger the lightbox overlay so that we can see it
	let lightbox = document.querySelector(".i-love-lightboxes");
	let lightboxImg = lightbox.querySelector("img");
	let lightboxDesc = document.querySelector(".lightbox-desc");
	let lightBoxClose = document.querySelector(".close-box");
	 console.log(lightBoxClose);
	
	lightbox.style.display = "block";
	lightbox.style.height = coverUp;
	// lightboxImg.src = "images/" +currentObject.img;
// console.log(lightboxImg.src)
// debugger;
	// lightboxDesc.innerHTML = hrd.desc;


	// if (lightboxImg > 999+"px"){
	// 	lightboxImg.style.width = 700+"px";
	// }

	lightBoxClose.addEventListener("click", closeLightbox, false);
}

function closeLightbox(){
	//reset everything and close the lgihtbox
	// debugger;
	document.body.style.overflow = "auto";
	let lightbox = document.querySelector(".i-love-lightboxes");
	lightbox.querySelector('img').src="";
	lightbox.querySelector("p").innerHTML = "";
	lightbox.style.display = "none";

}

button.addEventListener("click", getImage, false);
toBox.addEventListener("click", lightboxMe, false);



// window.addEventListener("load", checkWidth, false);

	})();