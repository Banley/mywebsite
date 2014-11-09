
document.getElementById("msg").textContent = "Hello from Javascript!";

var x = 0;

setInterval(animate, 50);

function animate() {
	x = x + 1;
	document.getElementById("msg").style.top = x + "px";
	document.getElementById("msg").style.left = x + "px";
}