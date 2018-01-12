(function (){
	"use strict";
	console.log("main.js connected");

const xhr = new XMLHttpRequest();

	const toBox = document.querySelector(".to-box");
	const button = document.querySelector(".data-ref");

function getImage(){
	if (!xhr) { // this is for older browser that don't support AJAX
      alert('instance not happening');
      return false; // exit the whole process and don't do anything else - we're done
    }

xhr.onreadystatechange = function processRequest() {
	let reqIndicator = document.querySelector('.request-state');
    // reqIndicator.textContent = xhr.readyState;

	if(xhr.readyState === XMLHttpRequest.DONE){
		if (xhr.status === 200) {
			let data = JSON.parse(xhr.responseText);
			processResult(data);
			console.log(this.id);

	}else {
		alert('there was a request problem');
	}
}

	// 	console.log(typeof xhr.responseText);//this is a string
	// 	//turn string into JS
	// 	var employees = JSON.parse(xhr.responseText);
	// 	console.log(typeof employees);//this is an object

	// 	var statusHTML = '<ul class="bulleted">';
	// 	for (var i=0; i<employees.length; i += 1) {
	// 		if(employees[i].inoffice === true) {
	// 			statusHTML+= '<li class="in">';
	// 		} else {
	// 			statusHTML+= '<li class="out">';
	// 		}
	// 		statusHTML += employees[i].name;
	// 		statusHTML += '</li>';
	// 	}
	// 	statusHTML += '</ul>';
	// 	document.querySelector("#employeeList").innerHTML = statusHTML;
	// }
};
xhr.open('GET', './admin/scripts/getPics.php?allPics');
xhr.send();
}
function processResult(data) {
	const{ pieces_desc, likeness_path} = data;
	let pDesc = document.querySelector("#ajaxDesc").textContent = pieces_desc;
	let imgPath = document.querySelector("#ajaxPic").textContent = likeness_path;
	console.log(pDesc, imgPath);

}



//START

	// function getImage() {
	// 	const url = './admin/scripts/getPics.php?allPics='+ this.id;

	// fetch(url) 
	// 	.then((resp) => resp.json())
	// 	.then(({ pieces_desc, likeness_path}) => {
	// 		let pDesc = document.querySelector("#ajaxDesc").textContent = pieces_desc;
	// 		let imgPath = document.querySelector("#ajaxPic").textContent = likeness_path;
	// 		console.log(pDesc, imgPath);
		
	// 	}) 
	// 	.catch(function(error) {
	// 		//catches any error and reports it to the database
	// 		console.log(error);
	// 	});
	// }
//END
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
	
	document.body.style.overflow = "hidden";

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
	// debugger;
	document.body.style.overflow = "auto";
	let lightbox = document.querySelector(".i-love-lightboxes");
	lightbox.querySelector('img').src="";
	lightbox.querySelector("p").innerHTML = "";
	lightbox.style.display = "none";

}

button.addEventListener("click", getImage, false);
toBox.addEventListener("click", lightboxMe, false);


	})();