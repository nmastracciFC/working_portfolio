(function (){
	"use strict";
	console.log("main.js connected");


	var toBox = document.querySelector(".to-box");
// 	theHeading = document.querySelector(".heading"),
// 	theSubhead = document.querySelector(".main-copy h2"),
// 	theSeasonText = document.querySelector(".main-copy p"),
// 	lbText = document.querySelector("img-desc"),
// 	appliedClass;

// function changeElements() {
// 	//debugger;
// 	//debugger is a special term that stops code execution
// 	//shows you the "this" keywork that shows where in the DOM tree you are
// 	let subImages = document.querySelector(".subImagesContainer");
// 	let objectIndex = dynamicContent[this.id];

// 	//remove duplicate images
// 	while (subImages.firstChild) {
// 		subImages.removeChild(subImages.firstChild);
// 	}

// 	//add the images to the bottom of the page
// 	objectIndex.images.forEach(function(image, index){
// 		//create image element
// 		let newSubImg = document.createElement("img");
// 		//add a css class to it
// 		newSubImg.classList.add("thumb");
// 		//set the source
// 		newSubImg.src = "images/" +objectIndex.images[index];

// 		newSubImg.dataset.index = index;
// 		//add an event handler to trigger a lightbox 
// 		newSubImg.addEventListener("click", function(){popLightbox(index, objectIndex);}, false);
// 		//add it to the page
// 		subImages.appendChild(newSubImg);
// 	})

// 	//remove the colours we applied on the the last click
// 	theSubhead.classList.remove(appliedClass);
// 	theHeading.classList.remove(appliedClass);
	
// 	//change the text using the values of the properties of the object
// 	theSubhead.firstChild.nodeValue = objectIndex.headline;
// 	theSeasonText.firstChild.nodeValue = objectIndex.text;
// 	//add the colour that corresponds to the season we clicked on
// 	theSubhead.classList.add(this.id);
// 	theHeading.classList.add(this.id);

// 	appliedClass = this.id;
// toBox.forEach(function(image, index){
// 	//will add an event handler to each image
// 	linkit.addEventListener("click", changeElements, false);
// });
toBox.addEventListener("click", lightboxMe, false);
// }

//loops through collection
// toBox.forEach(function(image, index){
// 	//will add an event handler to each image
// 	image.addEventListener("click", changeElements, false);
// });

//trigger the lightbox
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
	
	
	lightbox.style.display = "block";
	lightbox.style.height = coverUp;
	// lightboxImg.src = "images/" +currentObject.img;
// console.log(lightboxImg.src)
// debugger;
	// lightboxDesc.innerHTML = hrd.desc;


	if (lightboxImg > 999+"px"){
		lightboxImg.style.width = 700+"px";
	}

	lightBoxClose.addEventListener("click", closeLightbox, false);
}

function closeLightbox(){
	//reset everything and close the lgihtbox
	// debugger;
	document.body.style.overflow = "auto";
	let lightbox = document.querySelector(".lightbox");
	lightbox.querySelector('img').src="";
	lightbox.querySelector("p").innerHTML = "";
	lightbox.style.display = "none";

}



//document.querySelector('#spring').click();
//way to call the function to work right away
// changeElements.call(document.querySelector("#spring"));

// function checkWidth(){
// var screenWidth = window.innerWidth;
// if (screenWidth <= 900) {
// 	console.log(document.querySelector("#artwork"));
// 	document.querySelector("#artwork").classList.toggle('hidden');

// }
// }

// // var carImg = document.querySelectorAll(".data-ref");

// // function getDevCardImg() {
// // 	const url = './admin/scripts/getPics.php?allPics='+this.id;

// // 	fetch(url)
// // 	.then((resp)=> resp.json())
// // 	.then(({ }))

// // }


// window.addEventListener("load", checkWidth, false);

	})();