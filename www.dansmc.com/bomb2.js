<!-- This script and many more are available free online at -->
<!-- The JavaScript Source!! http://javascript.internet.com -->
picFollow = new Image();
picFollow.src = "email_me.gif";
picExplosion = new Image();
picExplosion.src = "e-mail_me.gif";
document.onmousemove = getMousePosition;
document.onmouseout = pauseBomb;
document.write("<div id=\"diva\" style=\"position:absolute\">");
document.write("<img name=\"pic\"src=" + picFollow.src + "></div>");
var picX = 20;
var picY = 100;
var step = 10;
var speed = 100;
var tolerance = step/2 +1;
var mouseX = 0;
var mouseY = 0;
var mouseOut = true;
var followMouse = false;
myInterval = setInterval('moveBomb()', speed);
function pauseBomb() {
mouseOut = true;
}
function getMousePosition(e) {
mouseX = window.event.x + document.body.scrollLeft;
mouseY = window.event.y + document.body.scrollTop;
mouseOut = false;
if (followMouse) {
diva.style.left = mouseX - pic.width / 2;
diva.style.top = mouseY - pic.height / 2;
   }
}
function calcNewPos() {
if (mouseX == picX)
return;
arg = (mouseY-picY) / (mouseX-picX);
mult = 1;
if (mouseX - picX < 0)
mult = -1;
alpha = Math.atan(arg);
dx = mult * step * Math.cos(alpha);
dy = mult * step * Math.sin(alpha);
picX += dx;
picY += dy;
}
function collision() {
if ((Math.abs(picX-mouseX) < tolerance) && (Math.abs(picY-mouseY) < tolerance) && (!mouseOut))
return true;
return false;
}
function hideAnimation() {
diva.style.visibility = "hidden";
}
function moveBomb() {
calcNewPos();
window.status = "("+mouseX+","+mouseY+")";
diva.style.left = picX - pic.width / 2;
diva.style.top = picY - pic.height / 2;
if (collision()) {
clearInterval(myInterval);
pic.src = picExplosion.src;
followMouse = true;
setTimeout('hideAnimation()', 5000);
   }
}
