let upper = parseFloat(document.getElementById("highTemp").innerHTML);
let lower = parseFloat(document.getElementById("lowTemp").innerHTML);
let speed = parseFloat(document.getElementById("windSpeed").innerHTML);
let t = (upper + lower) / 2;
let s = math.pow(speed, 0.16);

result - 35.74 + (0.6215 * t) - (35.75 * s) + (0.4275 * t * s);
document.getElementById("windchill").innerHTML = f + "&deg;F";