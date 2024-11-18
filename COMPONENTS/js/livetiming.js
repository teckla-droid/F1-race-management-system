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