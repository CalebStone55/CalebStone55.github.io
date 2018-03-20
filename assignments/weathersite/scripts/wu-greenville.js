var frankSum = new XMLHttpRequest();
frankSum.open('GET', 'https://api.wunderground.com/api/b08bb93d0e13e472/conditions/forecast/q/MN/Greenbush.json', true);
frankSum.send();

frankSum.onload = function() {
    var frankWu = JSON.parse(frankSum.responseText);
    console.log(frankWu);
    
    document.getElementById('w_icon').src = frankWu.current_observation.icon_url;
    document.getElementById('temp').innerHTML = frankWu.current_observation.temp_f;
    document.getElementById('high').innerHTML = frankWu.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    document.getElementById('low').innerHTML = frankWu.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    document.getElementById('precipitation').innerHTML = frankWu.current_observation.precip_today_in;
    document.getElementById('wind').innerHTML = frankWu.current_observation.wind_mph;
    document.getElementById('windchill').innerHTML = frankWu.current_observation.windchill_f;
    document.getElementById('dailyUpdate').innerHTML = frankWu.forecast.txt_forecast.forecastday["0"].fcttext;
}
