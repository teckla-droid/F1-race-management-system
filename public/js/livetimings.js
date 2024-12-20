// Function to fetch and populate the dropdown with current season's Grand Prix
async function populateGrandPrixDropdown() {
    try {
        const response = await fetch('https://ergast.com/api/f1/current.json'); // Fetch current season data
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();

        const races = data.MRData.RaceTable.Races;
        const dropdown = document.getElementById('race-select');
        dropdown.innerHTML = '<option value="" selected disabled>Choose a Grand Prix</option>'; // Default option

        // Populate dropdown with Grand Prix names
        races.forEach(race => {
            const option = document.createElement('option');
            option.value = race.round; // Use the round number as the value
            option.textContent = `${race.round}: ${race.raceName} (${race.Circuit.circuitName})`;
            dropdown.appendChild(option);
        });

        // Add event listener to fetch timings when a race is selected
        dropdown.addEventListener('change', (event) => {
            const selectedRound = event.target.value;
            if (selectedRound) {
                fetchLiveTimingsForRound(selectedRound);
            }
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
            document.getElementById('race-timings-table').innerHTML = '<tr><td colspan="7">No data available</td></tr>';
            return;
        }

        const results = raceData.Results;
        const tableBody = document.getElementById('race-timings-table');
        tableBody.innerHTML = ''; // Clear previous results

        // Loop through the results and display in the table
        results.forEach(result => {
            const position = result.position;
            const driver = `${result.Driver.givenName} ${result.Driver.familyName}`;
            const constructor = result.Constructor.name;
            const laps = result.laps;
            const time = result.Time ? result.Time.time : 'N/A'; // Handle missing Time data
            const status = result.status;
            const points = result.points;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${position}</td>
                <td>${driver}</td>
                <td>${constructor}</td>
                <td>${laps}</td>
                <td>${time}</td>
                <td>${status}</td>
                <td>${points}</td>
            `;
            tableBody.appendChild(row);
        });

    } catch (error) {
        console.error('Error fetching live timings:', error);
        document.getElementById('race-timings-table').innerHTML = '<tr><td colspan="7">Error loading data</td></tr>';
    }
}

// Call the function to populate the dropdown when the page loads
document.addEventListener('DOMContentLoaded', populateGrandPrixDropdown);
