var canvas = document.getElementById('a');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var sw = window.innerWidth / 10;
var cw = 2 * sw;
var sh = sw / 2;

ctx.beginPath();
ctx.arc(sw + cw / 2, 200, cw / 2, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(sw * 2 + cw * 3 / 2, 200, cw / 2, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(sw * 3 + cw * 5 / 2, 200, cw / 2, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(sw + cw / 2, 200 + sh + cw, cw / 2, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(sw * 2 + cw * 3 / 2, 200 + sh + cw, cw / 2, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(sw * 3 + cw * 5 / 2, 200 + sh + cw, cw / 2, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(sw + cw / 2, 200 + 2 * (sh + cw), cw / 2, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(sw * 2 + cw * 3 / 2, 200 + 2 * (sh + cw), cw / 2, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(sw * 3 + cw * 5 / 2, 200 + 2 * (sh + cw), cw / 2, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(sw * 2 + cw * 3 / 2, 200 + 3 * (sh + cw), cw / 2, 0, 2 * Math.PI);
ctx.stroke();

console.log(canvas);

