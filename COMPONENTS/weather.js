document.getElementById('getWeather').addEventListener('click', function() {
    const track = document.getElementById('track').value;
    let city;

    // Mapping tracks to cities for weather
    switch (track) {
        case 'Monza':
            city = 'Monza,IT';
            break;
        case 'Silverstone':
            city = 'Silverstone,GB';
            break;
        case 'Spa':
            city = 'Spa,BE';
            break;
        case 'Suzuka':
            city = 'Suzuka,JP';
            break;
        default:
            city = 'Monza,IT';
    }

    const apiKey = '5eacc42413777bbdf11fa6285f5f34f2'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherDesc = data.weather[0].description;
            const temp = data.main.temp;
            const rainProbability = data.rain ? `${data.rain['1h']} mm` : '0%';
            let strategy;

            // Basic strategy based on weather
            if (weatherDesc.includes('rain')) {
                strategy = 'Use wet tires, expect a slower race pace.';
            } else if (weatherDesc.includes('clear')) {
                strategy = 'Opt for soft tires, aggressive strategy might work.';
            } else if (weatherDesc.includes('cloud')) {
                strategy = 'Go for medium tires, monitor track temperature.';
            } else {
                strategy = 'Analyze track conditions closely for best tire choice.';
            }

            // Update DOM elements
            document.getElementById('description').innerText = `Sky: ${weatherDesc}`;
            document.getElementById('temp').innerText = `Temperature: ${temp} °C`;
            document.getElementById('rain').innerText = `Possibility of Rain: ${rainProbability}`;
            document.getElementById('strategy').innerText = `Recommended Strategy: ${strategy}`;
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
        });
});