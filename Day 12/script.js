async function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) {
        alert('Please enter a city name');
        return;
    }

    const apiKey = '909d6461103c15e65a08fdc29010e158'; // Your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            // Adding a custom 'carbon' property for demonstration purposes
            data.carbon = calculateCarbon(data.wind.speed); // or set a default value like data.carbon = 0;
            displayWeather(data);
        } else {
            alert('City not found');
        }
    } catch (error) {
        console.error('Error fetching the weather data:', error);
        alert('Failed to get weather data');
    }
}

function calculateCarbon(windSpeed) {
    // Example logic to calculate a 'carbon' value based on wind speed
    // This is just a mock function for demonstration
    if (windSpeed) {
        return (windSpeed * 0.1).toFixed(2); // Example formula
    } else {
        return "N/A"; // or a default value like 0
    }
}

function displayWeather(data) {
    const weatherCard = document.getElementById('weatherCard');
    weatherCard.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        <p><strong>Wind carbon:</strong> ${data.carbon} m/s</p>`;
    weatherCard.style.display = 'block';
}
// function changeBackgroundImage(condition) {
//     const weatherCard = document.getElementById('weatherCard');

//     if (condition === 'Clear') {
//         weatherCard.style.backgroundImage = "url('clear1.jpeg')";
//     } else if (condition === 'Clouds') {
//         weatherCard.style.backgroundImage = "url('cloudy1.jpg')";
//     } else if (condition === 'Rain') {
//         weatherCard.style.backgroundImage = "url('rainy1.jpeg')";
//     } else if (condition === 'Snow') {
//         weatherCard.style.backgroundImage = "url('snow1.jpeg')";
//     } else {
//         weatherCard.style.backgroundImage = "url('default.jpg')";
//     }
// }
