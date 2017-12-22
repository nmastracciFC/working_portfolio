(function (){
	"use strict";
	console.log("main.js connected");

var screenWidth = window.innerWidth;

var eight = document.querySelector("#eightRowing"),
    headerBack = document.querySelector('#headerBack'),
    title = document.querySelector("#title"),
    titleDesc = document.querySelector("#titleDesc"),
    indexContact = document.querySelector("#contact");

var rowingHeader = document.querySelector("#rowingHeader");

var skills = document.querySelector("#skills");


function parallaxHeader() {
    var scroll = window.pageYOffset;
    eight.style.top = -scroll * 0.1 + "px";
    // headerBack.style.top = -scroll * 0.7 + "px";
    title.style.top = scroll * 0.5 + "px";
    titleDesc.style.top = -scroll * 0.5 + "px";
    indexContact.style.top = -scroll * 0.5 + "px";
    // two.style.top = -scroll * 0.8 + "px";
    // one.style.top = -scroll * 1 + "px";
    
}

function rename(){
    var skillz = document.querySelector("#skills h1");

    skillz.innerHTML = "SkillZ";

    function original(){
        skillz.innerHTML = "Skills"
    }

    skills.addEventListener("mouseout", original, false);

}

// window.addEventListener("scroll", function(){
//     requestAnimationFrame(parallaxHeader);
//     }, false);

window.addEventListener("scroll", parallaxHeader, false);
skills.addEventListener("mouseover", rename, false);
//console.log(indexH1);

// function init() {
// //starts span character wrap
//     var title = this;
//     var newContent = '';
//     var length = 



    // foreach(i = 0; i < title.text().length; i++) {
    //   var substring = title.text().substr(i, 1);

    //   // If we have a character, wrap it
    //   if (substring != " ") {
    //     newContent += '<span>' + substring + '</span>';
    //   } else {
    //     newContent += substring;
    //   } 
    // }

    // Replace content
    // title.innerHTML = newContent; 
  // }

//ends span character wrap

	// rowingHeader.style.opacity = 1;
	// rowingHeader.style.left = 0;
//}
// function respond(){
// 	console.log(screenWidth);
// }


// window.addEventListener("load", init, false);
// window.addEventListener("resize", respond, false);




	})();