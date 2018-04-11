var date = new Date();
var day;
var month;
var numDay = date.getDate();
var year = date.getFullYear();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var calMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
day = weekday[date.getDay()];
month = calMonth[date.getMonth()];
date = day + ", " + numDay + " " + month + " " + year;
document.getElementById("currentdate").innerHTML = date;