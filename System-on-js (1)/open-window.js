document.getElementById("calc").onclick = function() {
document.getElementById('calc_window').style.display = 'flex';
}
document.getElementById("close_calc").onclick = function() {
document.getElementById('calc_window').style.display = 'none';
document.getElementById("calc_content").style.width = '25%';
document.getElementById('first-number').value = '';
document.getElementById('second-number').value = '';
document.getElementById('operation').innerHTML = '';
document.getElementById('answer').innerHTML = '';
}
document.getElementById("hidden_calc").onclick = function() {
document.getElementById('calc_window').style.display = 'none';
}
document.getElementById("restore_down").onclick = function() {
document.getElementById("calc_content").style.width = '50%';
}
setInterval(function() {
if (document.getElementById("calc_content").style.width == '50%') {
document.getElementById("restore_down").onclick = function() {
document.getElementById("calc_content").style.width = '25%';
}
}else if (document.getElementById("calc_content").style.width == '25%') {
document.getElementById("restore_down").onclick = function() {
document.getElementById("calc_content").style.width = '50%';
}
}
}, 1);
document.getElementsByClassName("plus")[0].onclick = function() {
document.getElementById('answer').innerHTML = Number(document.getElementById('first-number').value)+Number(document.getElementById('second-number').value);
document.getElementById('operation').innerHTML = '+';
}
document.getElementsByClassName("minus")[0].onclick = function() {
document.getElementById('answer').innerHTML = Number(document.getElementById('first-number').value)-Number(document.getElementById('second-number').value);
document.getElementById('operation').innerHTML = '-';
}
document.getElementsByClassName("times")[0].onclick = function() {
document.getElementById('answer').innerHTML = Number(document.getElementById('first-number').value)*Number(document.getElementById('second-number').value);
document.getElementById('operation').innerHTML = '&times;';
}
document.getElementsByClassName("divide")[0].onclick = function() {
document.getElementById('answer').innerHTML = Number(document.getElementById('first-number').value)/Number(document.getElementById('second-number').value);
document.getElementById('operation').innerHTML = '&divide;';
}
document.getElementById("otzivi").onclick = function() {
document.getElementById('otzivi_window').style.display = 'flex';
}
document.getElementById("close_otzivi").onclick = function() {
document.getElementById('otzivi_window').style.display = 'none';
document.getElementById("otzivi_content").style.width = '25%';
}
document.getElementById("hidden_otzivi").onclick = function() {
document.getElementById('otzivi_window').style.display = 'none';
}
document.getElementById("otzivi_restore_down").onclick = function() {
document.getElementById("otzivi_content").style.width = '50%';
}
setInterval(function() {
if (document.getElementById("otzivi_content").style.width == '50%') {
document.getElementById("otzivi_restore_down").onclick = function() {
document.getElementById("otzivi_content").style.width = '25%';
}
}else if (document.getElementById("otzivi_content").style.width == '25%') {
document.getElementById("otzivi_restore_down").onclick = function() {
document.getElementById("otzivi_content").style.width = '50%';
}
}
}, 1);
