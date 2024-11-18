// Function to show the selected section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach (section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
            if (sectionId === sectionId === 'dashboard') {
                fetchDashboardData();
            } else if(sectionId === 'live-timings') {
                fetchLiveTimings();
            } else if (sectionId === 'race-schedule') {
                fetchRaceSchedule();
            } else if (sectionId === 'driver-standings') {
                fetchDriverStandings();
            } else if (sectionId === 'team-drivers') {
                fetchTeamDrivers();    
            } else if (sectionId === 'weather') {
                fetchWeatherData(); 
            } else if (sectionId === 'fan-engagement') {
                fetchFanEngagementData();
            } else if (sectionId === 'safety-management') {
                fetchSafetyManagementData();
            }
        } else {
            section.style.display = 'none';
        }
    });
}
// Dashboard Section - Displays Next Race and Top Driver Standings
async function displayDashboardInfo() {
    const dashboard = document.getElementById('dashboard');

    // Set up the innerHTML layout for the Dashboard section
    dashboard.innerHTML = `
        <h1>Dashboard</h1>
        
        <!-- News Section -->
        <div id="news-section" class="dashboard-item">
            <h2>Latest News</h2>
            <ul id="news-list">
                <!-- News items will be injected here -->
            </ul>
        </div>
        
        <!-- Top 3 Drivers Section -->
        <div id="top-drivers" class="dashboard-item">
            <h2>Top 3 Drivers in Latest Grand Prix</h2>
            <ul id="driver-standings-list">
                <!-- Driver standings will be injected here -->
            </ul>
        </div>
    `;

    // Fetch and display the latest news and top 3 drivers
    await fetchLatestNews();
    await fetchTopDrivers();
}

// Function to fetch the latest news (replace with an actual API call for live news)
async function fetchLatestNews() {
    // Placeholder news items; replace with API call if you have one
    const newsItems = [
        { title: "F1 Season Update: New Changes to the Calendar", url: "https://example.com/news1" },
        { title: "Top Drivers Prepare for the Next Grand Prix", url: "https://example.com/news2" },
        { title: "FIA Announces New Regulations for 2025", url: "https://www.formula1.com/en/latest/article/fastest-lap-point-to-be-scrapped-in-2025-after-latest-fia-world-motor-sport.4pUjDzWnGRN7KVWENLc1BY" },
    ];

    // Populate the news list
    const newsList = document.getElementById('news-list');
    newsList.innerHTML = newsItems.map(item => `
        <li>
            <a href="${item.url}" target="_blank" style="color: #E10600;">${item.title}</a>
        </li>
    `).join('');
}

// Function to fetch the top 3 drivers from the latest Grand Prix
async function fetchTopDrivers() {
    try {
        const response = await fetch('https://ergast.com/api/f1/current/last/results.json');
        const data = await response.json();
        const results = data.MRData.RaceTable.Races[0].Results.slice(0, 3); // Get top 3 drivers

        // Populate top drivers list
        const driverStandingsList = document.getElementById('driver-standings-list');
        driverStandingsList.innerHTML = results.map(result => `
            <li>
                <strong>${result.position}.</strong> ${result.Driver.givenName} ${result.Driver.familyName} - ${result.Constructor.name}
            </li>
        `).join('');
    } catch (error) {
        console.error("Error fetching top drivers:", error);
        document.getElementById('driver-standings-list').innerHTML = "<p>Error loading driver standings.</p>";
    }
}

// Initialize Dashboard on Page Load
document.addEventListener('DOMContentLoaded', displayDashboardInfo);

// Initialize Dashboard on Page Load
document.addEventListener('DOMContentLoaded', displayDashboardInfo);


// Call the function to populate the dashboard
document.addEventListener('DOMContentLoaded', displayDashboardInfo);

// Function to fetch live timings from the last race
async function fetchLiveTimings() {
    const response = await fetch('https://ergast.com/api/f1/current/last/results.json');
    const data = await response.json();
    const results = data.MRData.RaceTable.Races[0].Results;

    const liveTimings = document.getElementById('live-timings');
    liveTimings.innerHTML = `
        <h1>Live Timings</h1>
        <table>
            <tr>
                <th>Position</th>
                <th>Driver</th>
                <th>Constructor</th>
                <th>Time</th>
            </tr>
            ${results.map(result => `
                <tr>
                    <td>${result.position}</td>
                    <td>${result.Driver.givenName} ${result.Driver.familyName}</td>
                    <td>${result.Constructor.name}</td>
                    <td>${result.Time ? result.Time.time : 'N/A'}</td>
                </tr>
            `).join('')}
        </table>
    `;
}

// Function to fetch race schedule
async function fetchRaceSchedule() {
    const year = document.getElementById('schedule-year').value; // Get selected year
    try {
        const response = await fetch(`https://ergast.com/api/f1/${year}.json`);
        const data = await response.json();
        const races = data.MRData.RaceTable.Races;

        // Display race schedule for the selected year
        const scheduleData = document.getElementById('schedule-data');
        scheduleData.innerHTML = `
            <table>
                <tr>
                    <th>Race Name</th>
                    <th>Date</th>
                    <th>Circuit</th>
                </tr>
                ${races.map(race => `
                    <tr>
                        <td>${race.raceName}</td>
                        <td>${race.date}</td>
                        <td>${race.Circuit.circuitName}</td>
                    </tr>
                `).join('')}
            </table>
        `;
    } catch (error) {
        console.error("Error fetching race schedule:", error);
        document.getElementById('schedule-data').innerHTML = "<p>Error loading race schedule.</p>";
    }
}


// Function to fetch driver standings
async function fetchDriverStandings() {
    const year = document.getElementById('standings-year').value; // Get selected year
    try {
        const response = await fetch(`https://ergast.com/api/f1/${year}/driverStandings.json`);
        const data = await response.json();
        const standings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;

        // Display driver standings for the selected year
        const standingsData = document.getElementById('standings-data');
        standingsData.innerHTML = `
            <table>
                <tr>
                    <th>Position</th>
                    <th>Driver</th>
                    <th>Constructor</th>
                    <th>Points</th>
                </tr>
                ${standings.map(standing => `
                    <tr>
                        <td>${standing.position}</td>
                        <td>${standing.Driver.givenName} ${standing.Driver.familyName}</td>
                        <td>${standing.Constructors.map(constructor => constructor.name).join(', ')}</td>
                        <td>${standing.points}</td>
                    </tr>
                `).join('')}
            </table>
        `;
    } catch (error) {
        console.error("Error fetching driver standings:", error);
        document.getElementById('standings-data').innerHTML = "<p>Error loading driver standings.</p>";
    }
}


// Function to fetch team drivers
async function fetchTeamDrivers() {
    const response = await fetch('https://ergast.com/api/f1/current/driverStandings.json');
    const data = await response.json();
    const standings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;

    const teamDrivers = document.getElementById('team-drivers');
    teamDrivers.innerHTML = `
        <h1>Team Drivers</h1>
        <table>
            <tr>
                <th>Driver</th>
                <th>Country</th>
                <th>Team</th>
            </tr>
            ${standings.map(standing => {
                const driverName = `${standing.Driver.givenName} ${standing.Driver.familyName}`;
                const driverCountry = standing.Driver.nationality;
                const constructorName = standing.Constructors[0].name; // Get the constructor name

                return `
                    <tr>
                        <td>${driverName}</td>
                        <td>${driverCountry}</td>
                        <td>${constructorName}</td>
                    </tr>
                `;
            }).join('')}
        </table>
    `;
}
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

// Fan Engagement Section - Allows Users to Post, Like, and Comment
// Check if the user is already logged in when the page loads
document.addEventListener('DOMContentLoaded', () => {
    checkAuthStatus();
});

// Sign-Up Function
function signUp() {
    const username = document.getElementById('sign-up-username').value.trim();
    const password = document.getElementById('sign-up-password').value.trim();

    if (username && password) {
        // Store user data in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Sign-Up successful! Please log in to continue.');
        // Clear input fields
        document.getElementById('sign-up-username').value = '';
        document.getElementById('sign-up-password').value = '';
    } else {
        alert('Please enter a valid username and password.');
    }
}

// Log-In Function
function logIn() {
    const username = document.getElementById('log-in-username').value.trim();
    const password = document.getElementById('log-in-password').value.trim();

    // Retrieve stored credentials from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        // Log the user in
        localStorage.setItem('isLoggedIn', 'true');
        alert('Log-In successful!');
        checkAuthStatus(); // Update UI based on log-in status
    } else {
        alert('Invalid username or password.');
    }
}

// Log-Out Function
function logOut() {
    localStorage.removeItem('isLoggedIn');
    checkAuthStatus(); // Update UI based on log-out status
    alert('You have been logged out.');
}

// Check Authentication Status for Fan Engagement Section
function checkAuthStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    // Toggle visibility based on log-in status
    document.getElementById('auth-section').style.display = isLoggedIn ? 'none' : 'block';
    document.getElementById('engagement-content').style.display = isLoggedIn ? 'block' : 'none';
}

// Initialize Fan Engagement
function initFanEngagement() {
    document.getElementById('post-btn').addEventListener('click', createPost);
}

// Create Post Function (for logged-in users only)
function createPost() {
    const postInput = document.getElementById('post-input');
    const content = postInput.value.trim();

    if (content) {
        const postElement = createPostElement(content);
        document.getElementById('posts-container').prepend(postElement);
        postInput.value = ''; // Clear input after posting
    } else {
        alert("Your post cannot be empty.");
    }
}
function initFanEngagement() {
    const postBtn = document.getElementById('post-btn');
    const postInput = document.getElementById('post-input');
    const postsContainer = document.getElementById('posts-container');

    postBtn.addEventListener('click', () => {
        const postContent = postInput.value.trim();
        if (postContent) {
            const postElement = createPostElement(postContent);
            postsContainer.prepend(postElement);
            postInput.value = ''; // Clear input
        }
    });
}

function createPostElement(content) {
    const post = document.createElement('div');
    post.classList.add('post');
    post.innerHTML = `
        <div class="post-header">User: Anonymous</div>
        <div class="post-content">${content}</div>
        <div class="post-actions">
            <button class="like-btn">Like</button>
            <button class="comment-btn">Comment</button>
        </div>
        <div class="comment-section"></div>
    `;
    
    post.querySelector('.like-btn').addEventListener('click', (event) => toggleLike(event.target));
    post.querySelector('.comment-btn').addEventListener('click', () => handleComment(post.querySelector('.comment-section')));

    return post;
}

function toggleLike(button) {
    if (!button.classList.contains('liked')) {
        button.classList.add('liked');
        button.textContent = 'Liked';
    } else {
        button.classList.remove('liked');
        button.textContent = 'Like';
    }
}

function handleComment(commentSection) {
    if (commentSection.childElementCount === 0) {
        const commentInputSection = document.createElement('div');
        commentInputSection.classList.add('comment-input-section');
        commentInputSection.innerHTML = `
            <textarea placeholder="Write a comment..." rows="1"></textarea>
            <button>Submit</button>
        `;
        
        const submitCommentBtn = commentInputSection.querySelector('button');
        submitCommentBtn.addEventListener('click', () => {
            const commentContent = commentInputSection.querySelector('textarea').value.trim();
            if (commentContent) {
                const commentElement = document.createElement('div');
                commentElement.classList.add('comment');
                commentElement.textContent = commentContent;
                commentSection.appendChild(commentElement);
                commentInputSection.querySelector('textarea').value = ''; // Clear input
            }
        });

        commentSection.appendChild(commentInputSection);
    }
}
document.addEventListener('DOMContentLoaded', initFanEngagement);
// Safety Management Section - Displays Recent Incidents and Safety Protocols
function fetchSafetyManagementData() {
    const safetyManagementSection = document.getElementById('safety-management');
    
    const incidents = [
        { description: 'Crash at turn 4', severity: 'High', response: 'Red flag, medical team dispatched' },
        { description: 'Minor collision at pit lane', severity: 'Low', response: 'Safety car deployed' }
    ];

    safetyManagementSection.innerHTML = `
        <h1>Safety Management</h1>
        <h2>Recent Incidents</h2>
        <table>
            <tr>
                <th>Description</th>
                <th>Severity</th>
                <th>Response</th>
            </tr>
            ${incidents.map(incident => `
                <tr>
                    <td>${incident.description}</td>
                    <td>${incident.severity}</td>
                    <td>${incident.response}</td>
                </tr>
            `).join('')}
        </table>
        <h2>Safety Protocols</h2>
        <p>Emergency response is handled by the trackside medical team and security.</p>
        <p>Standard procedures include deploying safety cars, red flags, and immediate evacuation as needed.</p>
    `;
}

// Initialize Dashboard on Page Load
document.addEventListener('DOMContentLoaded', () => {
    displayDashboardInfo();
    fetchRaceSchedule();
});
