const apiKey = '59b4a13c64739b72c0304cb185c13024'; 
const city = "delhi";
function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) {
        alert('Please enter a city name');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            displayDescription(data);
            displayTemperature(data);
            displayWind(data);
            displayHumidity(data);
            displayTopic1(data)
            displayTopic2(data)
            displayTopic3(data)

        })
        .catch(error => {
            document.getElementById('temperature').innerHTML = `<p style="color: red;">${error.message}</p>`;
            document.getElementById('wind').innerHTML = `<p style="color: red;">${error.message}</p>`;

        });
}

function displayTopic1(data) {
  const Topic1Div = document.getElementById('topic1');
  const topic1Html = `
       <p>${data.main.temp} °C</p>

`;
  Topic1Div.innerHTML = topic1Html;
}

function displayTopic2(data) {
  const Topic2Div = document.getElementById('topic2');
  const topic2Html = `
     <p>${data.wind.speed} m/s</p>

`;
  Topic2Div.innerHTML = topic2Html;
}

function displayTopic3(data) {
  const Topic3Div = document.getElementById('topic3');
  const topic3Html = `
       <p>${data.main.humidity} %</p>
`;
  Topic3Div.innerHTML = topic3Html;
}

function displayDescription(data) {
  const descriptionDiv = document.getElementById('description');
  const descriptionHtml = `
        <h2>Weather in ${data.name}</h2>
`;
  descriptionDiv.innerHTML = descriptionHtml;
}


function displayTemperature(data) {
    const weatherDiv = document.getElementById('temperature');
    const weatherHtml = `
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Min temperature:</strong> ${data.main.temp_min}°C</p>
        <p><strong>Max temperature:</strong> ${data.main.temp_max} °C</p>
`;
    weatherDiv.innerHTML = weatherHtml;
}

function displayWind(data) {
  const windDiv = document.getElementById('wind');
  const windHtml = `
      <p><strong>Wind speed:</strong> ${data.wind.speed} m/s</p>
      <p><strong>Wind degree:</strong> ${data.wind.deg} °</p>
      <p><strong>Visibility:</strong> ${data.visibility} m</p>
`;
  windDiv.innerHTML = windHtml;
}

function displayHumidity(data) {
  const humidityDiv = document.getElementById('humidity');
  const humidityHtml = `
      <p><strong>Humidity:</strong> ${data.main.humidity} %</p>
      <p><strong>Sunrise:</strong> ${data.sys.sunrise}</p>
      <p><strong>Sunset:</strong> ${data.sys.sunset} </p>
`;
  humidityDiv.innerHTML = humidityHtml;
}


