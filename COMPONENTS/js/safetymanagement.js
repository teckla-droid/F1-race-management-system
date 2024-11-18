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
