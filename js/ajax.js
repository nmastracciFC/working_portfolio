console.log("Welcome! Thanks for taking the time to poke around. That contact box feels awful bare... would probably look better if you filled it out.");
const xhr = new XMLHttpRequest();
const toBox = document.querySelector(".to-box");
	
function getImage(){
	if (!xhr) { 
      alert('instance not happening');
      return false; 
    }

xhr.onreadystatechange = processRequest

xhr.open('GET', './admin/scripts/getPics.php?allPics='+this.id);
xhr.send();
}
function processRequest() {
	if(xhr.readyState === XMLHttpRequest.DONE){
		if (xhr.status === 200) {
			// var data = JSON.parse(xhr.responseText);
			var data = xhr.responseText;
			console.log(xhr);
			console.log(responseText);
			console.log(xhr.responsetext);
			processResult(data);
			console.log(data);
		

	}else {
		alert('there was a request problem');
	}
}


	function processResult(data) {
	let lightbox = document.querySelector(".i-love-lightboxes");
	let pDesc = document.querySelector(".lightbox-desc").textContent = data[0].pieces_desc;
	let imgPath = lightbox.querySelector("img").src = "images/"+data[0].likeness_path;

}
}

function lightboxMe() {
	let coverUp = window.innerHeight;
	let coverAcross = window.innerWidth;
	window.scrollTo(0,0);
	document.body.style.overflow = "hidden";

	let lightbox = document.querySelector(".i-love-lightboxes");
	let lightboxImg = lightbox.querySelector("img");
	let lightboxDesc = document.querySelector(".lightbox-desc");
	let lightBoxClose = document.querySelector(".close-box");
	
	lightbox.style.display = "block";
	lightbox.style.height = coverUp;
	if (coverAcross < 900) {
	if (lightboxImg > 999+"px"){
		lightboxImg.style.width = 320+"px";
	}
	} else  {
		if (lightboxImg > 999+"px"){
		lightboxImg.style.width = 700+"px";
	}
	}

	lightBoxClose.addEventListener("click", closeLightbox, false);
}

function closeLightbox(){
	window.scrollTo(0,1000);
	document.body.style.overflow = "auto";
	let lightbox = document.querySelector(".i-love-lightboxes");
	lightbox.querySelector('img').src="";
	lightbox.querySelector("p").innerHTML = "";
	lightbox.style.display = "none";

}

toBox.addEventListener("click", lightboxMe, false);
toBox.addEventListener("click", getImage, false);
