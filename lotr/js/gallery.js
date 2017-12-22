(function() {        
  "use strict";
  console.log("gallery.JS is attached")      

var slidingLg = document.querySelector('#sliderLg'),
	slidingMed = document.querySelector('#sliderMed'),
	slidingSm = document.querySelector('#sliderSm'),
	haventAged = document.querySelector('#haventAged'),
	oneRing = document.querySelector('#oneRing'),
	thatAgain = document.querySelector('#thatAgain');
	console.log(slidingLg, slidingSm, slidingMed);

var screenW = window.innerWidth,
	viewer = document.querySelector("#window");
	// console.log(viewer, screenW);

function init(){
	if (screenW < 640) {
		viewer.style.width = 300+"px";
		viewer.style.height = 152+"px";

	} else if (screenW > 640 && screenW <1024) {
		viewer.style.width = 600+"px";
		viewer.style.height = 304+"px";
	} else {
		viewer.style.width = 1200+"px";
		viewer.style.height = 609+"px";

	}
	console.log(viewer.style.width, viewer.style.height);
}


function slideOver(e){
	if(e.target.id == 'haventAged') {
		console.log(e.target.id);
		if (screenW < 640) {
			var endpoint = 0+'px';

		} else if (screenW > 640 && screenW <1024) {
			var endpoint = 0+'px';
		} else {
			var endpoint = 0+'px';
		}
			

	}else if(e.target.id == 'oneRing') {
		console.log(e.target.id);
		if (screenW < 640) {
			var endpoint = -300+'px';

		} else if (screenW > 640 && screenW <1024) {
			var endpoint = -600+'px';
		} else {
			var endpoint = -1200+'px';
		}
		

	}else if(e.target.id == 'thatAgain') {
		console.log(e.target.id);
		if (screenW < 640) {
			var endpoint = -600+'px';

		} else if (screenW > 640 && screenW <1024) {
			var endpoint = -1200+'px';
		} else {
			var endpoint = -2400+'px';
		}
		
}

TweenMax.to(slidingLg,0.8,{left:endpoint, ease:Back.easeOut});
TweenMax.to(slidingMed,0.8,{left:endpoint, ease:Back.easeOut});
TweenMax.to(slidingSm,0.8,{left:endpoint, ease:Back.easeOut});

}

haventAged.addEventListener('click', slideOver, false);
oneRing.addEventListener('click', slideOver, false);
thatAgain.addEventListener('click', slideOver, false);

window.addEventListener("load", init, false);

})();