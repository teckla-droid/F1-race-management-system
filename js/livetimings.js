// Function to populate the dropdown with Grand Prix options
async function populateRaceDropdown() {
    try {
        const response = await fetch('https://ergast.com/api/f1/current.json'); // Fetch current season data
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();

        const races = data.MRData.RaceTable.Races;
        const raceSelect = document.getElementById('race-select');

        // Populate dropdown with race names and round numbers
        races.forEach(race => {
            const option = document.createElement('option');
            option.value = race.round; // Use round number as value
            option.textContent = `${race.raceName} (${race.date})`; // Display race name and date
            raceSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Error fetching race list:', error);
    }
}

// Function to fetch and display timings for the selected Grand Prix
async function fetchSelectedRaceTimings() {
    const round = document.getElementById('race-select').value; // Get selected round
    if (!round) return;

    try {
        const response = await fetch(`https://ergast.com/api/f1/current/${round}/results.json`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();

        const raceData = data.MRData.RaceTable.Races[0];
        if (!raceData || !raceData.Results) {
            document.getElementById('live-timings').innerHTML = '<tr><td colspan="4">No data available</td></tr>';
            return;
        }

        const results = raceData.Results;
        const liveTimings = document.getElementById('live-timings');
        liveTimings.innerHTML = ''; // Clear the table body

        results.forEach(result => {
            const position = result.position;
            const driver = `${result.Driver.givenName} ${result.Driver.familyName}`;
            const constructor = result.Constructor.name;
            const time = result.Time ? result.Time.time : 'N/A'; // Handle missing Time data

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${position}</td>
                <td>${driver}</td>
                <td>${constructor}</td>
                <td>${time}</td>
            `;
            liveTimings.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching race timings:', error);
        document.getElementById('live-timings').innerHTML = '<tr><td colspan="4">Error loading data</td></tr>';
    }
}

// Initialize the dropdown and event listeners on page load
document.addEventListener('DOMContentLoaded', () => {
    populateRaceDropdown();
});
