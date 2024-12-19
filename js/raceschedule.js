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
            <thead>
                <tr>
                <th>Race Name</th>
                <th>Date</th>
                <th>Circuit</th>
                </tr>
            </thead>
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
