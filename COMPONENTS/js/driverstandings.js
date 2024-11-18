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
