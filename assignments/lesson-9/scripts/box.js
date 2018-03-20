
      var output = document.querySelector('section');
      
      var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
      var request = new XMLHttpRequest();
      request.open("GET", requestURL);
      request.responseType = 'json';
      request.send();

      request.onload = function() {
          var jsondata = request.response;
          var cities = jsondata['towns'];
          for (var i = 0; i < cities.length; i++) {
              if(i == 2) continue;
              var city = document.createElement('h3');
              var motto = document.createElement('p');
              var yearfounded = document.createElement('p');
              var currentPopulation = document.createElement('p');
              var averageRainfall = document.createElement('p');
              city.textContent = cities[i].name + ' City';              
              motto.textContent = '"' + cities[i].motto + '"';              
              yearfounded.textContent = 'Year Founded: ' + cities[i].yearFounded;              
              currentPopulation.textContent = 'Current Population: ' + cities[i].currentPopulation + ' People';              
              averageRainfall.textContent = 'Annual Rainfall: ' + cities[i].averageRainfall + ' Inches';
              output.appendChild(city);
              output.appendChild(motto);
              output.appendChild(yearfounded);
              output.appendChild(currentPopulation);
              output.appendChild(averageRainfall);
	       }
      }
      