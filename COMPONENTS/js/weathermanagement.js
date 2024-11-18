// Weather Section - Fetches and Displays Weather Data from OpenWeather API
async function fetchWeatherData() {
    const apiKey = '5eacc42413777bbdf11fa6285f5f34f2'; // Replace with your actual OpenWeather API key
    const trackSelect = document.getElementById('track-select');
    const city = trackSelect.value; // Get selected track location from dropdown
    
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) throw new Error(`Error: ${response.status}`);

        const data = await response.json();
        
        // Extract relevant data
        const { name, main: { temp, humidity }, weather: [{ description, icon }] } = data;
        // Get the icon URL from OpenWeather
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`; // 2x for larger icon size
        
        // Update weather display
        document.getElementById('weather-info').innerHTML = `
            <div class="weather-card">
                <h2>Weather at ${name}</h2>
                <p><strong>Temperature:</strong> ${temp}°C</p>
                <div class="weather-details">
                    <img src="${iconUrl}" alt="${description}" class="weather-icon" />
                    <p><strong>Condition:</strong> ${description.charAt(0).toUpperCase() + description.slice(1)}</p>
                </div>
                <p><strong>Humidity:</strong> ${humidity}%</p>
            </div>
        `;
    } catch (error) {
        console.error('Weather fetch error:', error);
        document.getElementById('weather-info').innerHTML = `<p>Error loading weather data for ${city}.</p>`;
    }
}
