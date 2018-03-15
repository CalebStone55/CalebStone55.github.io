var conditionURL = 'http://api.wunderground.com/api/b08bb93d0e13e472/conditions/q/MN/Franklin.json';
var requestCon = new XMLHttpRequest();
request.open('GET', conditionURL, true);
request.send();

requestCon.onload = function() {
    var franklinCon = JSON.parse(requestCon.responseText);
    console.log(franklinCon);
    document.getElementById('curr').innerHTML = franklinCon.current_observation.weather;
    document.getElementById('temp').innerHTML = franklinCon.current_observation.temp_f;
    document.getElementById('windSpeed').innerHTML = franklinCon.current_observation.wind_mph;
    document.getElementById('w_icon').src = franklinCon.current_observation.icon_url;
}

var forecastURL = 'http://api.wunderground.com/api/b08bb93d0e13e472/forecast/q/MN/Franklin.json';
var requestFor = new XMLHttpRequest();
requestFor.open('GET', forecastURL, true);
requestFor.send();

requestFor.onload = function() {
    var franklinFor = JSON.parse(requestFor.responseText);
    console.log(franklinFor);
    document.getElementById('forcast').innerHTML = franklinFor.forcast.txt.forcastday["0"].fcttext;
}