var vid = document.getElementById("bgvid");
var toggle = false;

vid.playbackRate = 0.5;
vid.loop = true;

$('video').click(function(){
	$(this).toggleClass("filter");
});


// vid.addEventListener("click", function(){
// 	if(toggle === false){
// 		this.classList.remove("filter");
// 		toggle = true;
// 	}else{
// 		this.classList.add("filter");
// 		toggle = false;
// 	}
// })


function randomFilter(){
	
	var blur = Math.floor(Math.random() * 20);
	var sat = Math.floor(Math.random() * 5);
	var hue = Math.floor(Math.random() * 360);
	var bright = Math.floor(Math.random() * 1);
	var cont = Math.floor(Math.random() * 5);
	var invert = Math.floor(Math.random() * 1);
	var sepia = Math.floor(Math.random() * 1);
	return "-webkit-filter: blur(" + blur + "px" + ") " + "saturate(" + sat + ") " + "hue(" + hue + "deg" + ") " + "brightness(" + bright + ") " + "contrast(" + cont + ") " + "invert(" + invert + ") " + "sepia(" + sepia + ");";
}