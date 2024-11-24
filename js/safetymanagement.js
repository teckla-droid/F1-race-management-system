// Safety Management Section - Displays Recent Incidents and Safety Protocols
function fetchSafetyManagementData() {
    const safetyManagementSection = document.getElementById('safety-management');
    
    const incidents = [
        {
            incident: "Romain Grosjean’s Bahrain GP Crash",
            date: "2020, Bahrain",
            description: "Grosjean's car split in half after a high-speed crash during the Bahrain Grand Prix. His car was engulfed in flames but he miraculously survived with only minor burns to his hands.",
            FIAresponse: "The Halo device and HANS played crucial roles in protecting him. The FIA further improved fireproof gear and medical protocols to enhance driver safety in fire-related incidents.",
            
        },
        {
            incident: "Zhou Guanyu’s Silverstone Crash",
            date: "2022, Silverstone",
            description: "Zhou’s car was flipped upside down and skidded across the track before hitting the barriers. Thankfully, he emerged unscathed.",
            FIAresponse: "The Halo device was credited with saving Zhou’s life. Following this incident, the FIA reviewed and refined its safety measures for high-impact crashes.",
            
        },
        {
            incident: "Mick Schumacher’s Saudi Arabia Crash",
            date: "2022, Jeddah",
            description: "Schumacher suffered a massive crash during qualifying when he lost control and crashed into a concrete barrier. He was unharmed, but the crash was a stark reminder of the risks involved.",
            FIAresponse: "This incident reinforced the need for better barrier technology and more rigid driver protection systems. The FIA continued to fine-tune the safety cell designs and medical response time.",
            
        },
        {
            incident: "Max Verstappen and Lewis Hamilton’s Silverstone Collision",
            date: "2021, Silverstone",
            description: "In a dramatic collision, Verstappen was sent into a high-speed crash at Silverstone when Hamilton attempted an overtaking maneuver. Verstappen was hospitalized but recovered fully.",
            FIAresponse: "This accident renewed discussions on racing etiquette and prompted further improvement in track design and incident management during high-speed maneuvers.",
            
        },
        {
            incident: "Lance Stroll’s Singapore Crash",
            date: "2023, Singapore",
            description: "During qualifying, Stroll overcorrected after running wide, causing his car to slam into the barriers. The car was destroyed, but Stroll was unharmed.",
            FIAresponse: "The crash underscored the importance of high-friction run-off areas and the safety barriers that absorbed the force of the crash.",
            
        },
        {
            incident: "Kevin Magnussen’s Belgium Crash",
            date: "2016, Belgium",
            description: "Magnussen’s car lost control at high speed and crashed into barriers, causing significant damage to the car.",
            FIAresponse: "The accident highlighted the effectiveness of the barrier technology and deformation zones introduced to minimize the impact of crashes.",
            
        },
        {
            incident: "Max Verstappen’s Monaco Crash",
            date: "2015, Monaco",
            description: "Verstappen’s Toro Rosso was airborne after a collision with Romain Grosjean’s car, landing nose-first into the barriers.",
            FIAresponse: "The incident led to improvements in cockpit safety and reinforced the need for better crash impact designs.",
            
        }
    ];

    safetyManagementSection.innerHTML = `
        <h1>Safety Management</h1>
        <h2>Race Incidents</h2>
        <table>
        <thead>
            <tr>
            <th>Incident</th>
            <th>Date</th>
            <th>Description</th>
            <th>FIA Response</th>
            </tr>
        </thead>
            ${incidents.map(incident => `
                <tr>
                    <td>${incident.incident}</td>
                    <td>${incident.date}</td>
                    <td>${incident.description}</td>
                    <td>${incident.FIAresponse}</td>
                </tr>
            `).join('')}
        </table>
        <h2>Safety Protocols and measures</h2>
        <p>Halo Device (introduced 2018):A titanium frame that protects the driver's head, crucial in preventing injuries from debris or barriers.</p>
        <p>Safety Car (introduced 2019): A large, electric vehicle that acts as a safety net for the driver during emergencies, such as a crash.</p>
        <p>Red Flag System (introduced 2019): A system that alerts drivers to potential dangerous situations, such as a collision or sudden acceleration.</p>
        <p>Tyre Replacement System (introduced 2020): A system that replaces damaged tires automatically, reducing the risk of accidents.</p>
        <p>Crash-Resistant Cockpit: Reinforced structures surrounding the cockpit to prevent drivers from serious injury during high-speed impacts.</p>
        <p>Emergency Equipment (introduced 2020): Emergency medical equipment, such as first aid kits and life jackets, to help drivers during emergencies.</p>
        <p>Training for Emergency Response (introduced 2020): Advanced training sessions to help drivers respond to emergencies quickly and safely.</p>
        <p>Virtual Safety Car (VSC): This was improved after Bianchi’s tragic accident to better manage incidents on track without deploying the physical safety car, reducing track risks.</p>
    `;
}
