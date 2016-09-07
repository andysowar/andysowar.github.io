var vid = document.getElementById("bgvid");

vid.playbackRate = 0.5;
vid.loop = true;

vid.addEventListener("loadstart", function(){
	this.classList.add("filter");
})

function randomFilter(){
	
	var blur = Math.floor(Math.random() * 20);
	var sat = Math.floor(Math.random() * 5);
	var hue = Math.floor(Math.random() * 360);
	var bright = Math.floor(Math.random() * 1);
	var cont = Math.floor(Math.random() * 5);
	var invert = Math.floor(Math.random() * 1);
	var sepia = Math.floor(Math.random() * 1);
	return "blur(" + blur + "px" + ") " + "saturate(" + sat + ") " + "hue(" + hue + "deg" + ") " + "brightness(" + bright + ") " + "contrast(" + cont + ") " + "invert(" + invert + ") " + "sepia(" + sepia + ");";
}