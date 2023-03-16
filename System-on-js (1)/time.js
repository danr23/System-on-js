function getNameMonth(month) {
nameMonth = 0;
if (month == 0) {
nameMonth = "January";
}else if (month == 1) {
nameMonth = "February";
}else if (month == 2) {
nameMonth = "March";
}else if (month == 3) {
nameMonth = "April";
}else if (month == 4) {
nameMonth = "May";
}else if (month == 5) {
nameMonth = "June";
}else if (month == 6) {
nameMonth = "July";
}else if (month == 7) {
nameMonth = "August";
}else if (month == 8) {
nameMonth = "September";
}else if (month == 9) {
nameMonth = "October";
}else if (month == 10) {
nameMonth = "November";
}else if (month == 11) {
nameMonth = "December";
}
return nameMonth;
}
function getMinutesNormalFormat(min) {
if (min == 0) {
return "00";
}else if (min == 1) {
return "01";
}else if (min == 2) {
return "02";
}else if (min == 3) {
return "03";
}else if (min == 4) {
return "04";
}else if (min == 5) {
return "05";
}else if (min == 6) {
return "06";
}else if (min == 7) {
return "07";
}else if (min == 8) {
return "08";
}else if (min == 9) {
return "09";
}else if (min > 9) {
return min;
}
}
setInterval(function() {
today = new Date();
document.getElementsByClassName("date")[0].innerHTML = getNameMonth(today.getMonth())+" "+today.getDate()+" "+today.getHours()+":"+getMinutesNormalFormat(today.getMinutes());
}, 1);
