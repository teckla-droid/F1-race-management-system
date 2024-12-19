
// Function to fetch and populate dropdown with current season's Grand Prix
async function populateGrandPrixDropdown() {
    try {
        const response = await fetch('https://ergast.com/api/f1/current.json'); // Fetch current season data
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();

        const races = data.MRData.RaceTable.Races;
        const dropdown = document.getElementById('grand-prix-dropdown');
        dropdown.innerHTML = '<option value="">Select a Grand Prix</option>'; // Default option

        // Populate dropdown with Grand Prix names
        races.forEach(race => {
            const option = document.createElement('option');
            option.value = race.round; // Use the round number as the value
            option.textContent = `${race.round}: ${race.raceName}`;
            dropdown.appendChild(option);
        });

        // Add event listener to fetch timings when a race is selected
        dropdown.addEventListener('change', (event) => {
            const selectedRound = event.target.value;
            if (selectedRound) fetchLiveTimingsForRound(selectedRound);
        });
    } catch (error) {
        console.error('Error fetching Grand Prix data:', error);
    }
}

// Function to fetch and display live timings for the selected round
async function fetchLiveTimingsForRound(round) {
    try {
        const response = await fetch(`https://ergast.com/api/f1/current/${round}/results.json`); // Fetch results for the selected round
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();

        const raceData = data.MRData.RaceTable.Races[0];
        if (!raceData || !raceData.Results) {
            document.getElementById('live-timings-table').innerHTML = '<tr><td colspan="4">No data available</td></tr>';
            return;
        }

        const results = raceData.Results;
        const tableBody = document.getElementById('live-timings-table');
        tableBody.innerHTML = ''; // Clear previous results

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
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching live timings:', error);
        document.getElementById('live-timings-table').innerHTML = '<tr><td colspan="4">Error loading data</td></tr>';
    }
}

// Initialize the Live Timings dropdown and functionality on page load
document.addEventListener('DOMContentLoaded', () => {
    populateGrandPrixDropdown();
});
