let cnv = document.getElementById("canvas");
let ctx = cnv.getContext('2d');
sb = 0;
rect = 15;
ctx.strokeStyle = "#202020";
ctx.fillStyle = "#ddffff";
ctx.shadowBlur = sb;
ctx.shadowColor = "#0f0f0f";
ctx.lineWidth = 3;
ctx.beginPath();
ctx.moveTo(75, 25);
ctx.quadraticCurveTo(25, 25, 25, 62.5);
ctx.quadraticCurveTo(25, 100, 48, 100);
ctx.quadraticCurveTo(50, 120, 30, 125);
ctx.quadraticCurveTo(60, 120, 65, 100);
ctx.quadraticCurveTo(125, 100, 125, 62.5);
ctx.quadraticCurveTo(125, 25, 75, 25);
ctx.fill();
ctx.stroke();
setInterval(function() {
ctx.clearRect(0,0,150,150);
sb++;
if (sb == 25) {
sb = 0;
}
ctx.shadowBlur = sb;
ctx.fill();
ctx.stroke();
}, 30);
ctx.rect(40, 53, rect, rect);
ctx.rect(67, 53, rect, rect);
ctx.rect(94, 53, rect, rect);
rect--;
if (rect == 1) {
rect = 15;
}
ctx.clearRect(0,0,150,150);
