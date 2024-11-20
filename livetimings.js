// Function to fetch live timings from the last race
async function fetchLiveTimings() {
    try {
        const response = await fetch('https://ergast.com/api/f1/current/last/results.json');
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
        console.error('Error fetching live timings:', error);
        document.getElementById('live-timings').innerHTML = '<tr><td colspan="4">Error loading data</td></tr>';
    }
}

// Add event listener to load timings on page load
document.addEventListener('DOMContentLoaded', fetchLiveTimings);
