
document.getElementById("msg").textContent = "Hello from Javascript!";

var x = 1;
var y = 1;
var dx = 1;
var dy = 1;
var scale = .5;
var dscale = .05;
setInterval(animate, 50);

function animate() {
	if (x > 150) dx = -1;
	if (x < 1) dx = 1;
	if (y > 100) dy = -1;
	if (y < 1) dy = 1;
	if (scale < .5) dscale = .05;
	if (scale > 2) dscale = -.05;
	x = x + dx;
	y = y + dy;
	scale = scale + dscale;
	document.getElementById("msg").style.top = y + "px";
	document.getElementById("msg").style.left = x + "px";
	document.getElementById("msg").style.transform = "scale(" + scale + ", " + scale + ")";
}