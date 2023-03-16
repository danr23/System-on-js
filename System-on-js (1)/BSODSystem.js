randomBSOD = Math.ceil(Math.floor(Math.random()*3));
setTimeout(function() {
document.getElementById("load").innerHTML = document.getElementById("load").innerHTML+"Загружем операцонную систему...<br>";
}, 30);
setTimeout(function() {
document.getElementById("load").innerHTML = document.getElementById("load").innerHTML+"\"Сингулярность свою несете...\"<br>";
}, 100);
setTimeout(function() {
document.getElementById("load").innerHTML = document.getElementById("load").innerHTML+"ABOBA<br>";
}, 175);
setTimeout(function() {
document.getElementById("load").innerHTML = document.getElementById("load").innerHTML+"Летим в космос<br>";
}, 225);
setTimeout(function() {
document.getElementById("load").innerHTML = document.getElementById("load").innerHTML+"Прилетели на луну<br>";
}, 300);
setTimeout(function() {
document.getElementById("load").innerHTML = document.getElementById("load").innerHTML+"\"Случайно\" прилетели на марс<br>";
}, 400);
if (randomBSOD == 2) {
setTimeout(function() {
document.getElementById("load").innerHTML = document.getElementById("load").innerHTML+"BSOD<br>";
}, 500);
setTimeout(function() {
document.getElementById("load").innerHTML = document.getElementById("load").innerHTML+"Упс... синий экран смерти :)<br>";
}, 575);
setTimeout(function() {
document.getElementById("load").innerHTML = "<font style=\"font-size: 75px;\" color=\"white\">;)</font><br><br><br><font color=\"white\">АБОБА</font>";
document.querySelector("body").setAttribute('bgcolor','#00aade');
}, 675);
}else if (randomBSOD != 2) {
setTimeout(function() {
location.href = 'system.html';
}, 700);
};
