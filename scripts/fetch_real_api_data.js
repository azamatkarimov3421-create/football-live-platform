const https = require('https');
const fs = require('fs');
const path = require('path');

const API_KEY = '319a2c7bae61475a999de7a761a4f79e';

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'X-Auth-Token': API_KEY } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  console.log('Fetching real data from Football-Data.org API with user key...');

  const results = {};

  for (const comp of ['PL', 'PD', 'CL']) {
    console.log(`Fetching ${comp} matches...`);
    const data = await fetchJson(`https://api.football-data.org/v4/competitions/${comp}/matches`);
    if (data.matches) {
      console.log(`Got ${data.matches.length} matches for ${comp}`);
      results[comp] = data.matches;
    } else {
      console.error(`Failed to get matches for ${comp}:`, data);
    }
    // Small pause to respect rate limits
    await new Promise(r => setTimeout(r, 600));
  }

  // Also fetch standings
  const standings = {};
  for (const comp of ['PL', 'PD', 'CL']) {
    console.log(`Fetching ${comp} standings...`);
    const stData = await fetchJson(`https://api.football-data.org/v4/competitions/${comp}/standings`);
    if (stData.standings) {
      standings[comp] = stData;
    }
    await new Promise(r => setTimeout(r, 600));
  }

  // Combine relevant matches:
  // For each competition, take:
  // - Completed matches from the latest matchday
  // - Upcoming matches from the next matchday
  // - Any matches that are IN_PLAY or PAUSED
  const activeMatches = [];

  for (const comp of ['PL', 'PD', 'CL']) {
    const list = results[comp] || [];
    const inPlay = list.filter(m => m.status === 'IN_PLAY' || m.status === 'PAUSED');
    const finished = list.filter(m => m.status === 'FINISHED');
    const scheduled = list.filter(m => m.status === 'TIMED' || m.status === 'SCHEDULED');

    // Get last 10 finished and next 10 scheduled
    const recentFinished = finished.slice(-10);
    const nextScheduled = scheduled.slice(0, 10);

    activeMatches.push(...inPlay, ...recentFinished, ...nextScheduled);
  }

  console.log(`Total curated real matches from API: ${activeMatches.length}`);

  const outputFilePath = path.join(__dirname, 'real_api_data.json');
  fs.writeFileSync(outputFilePath, JSON.stringify({
    matches: activeMatches,
    allMatches: results,
    standings,
    fetchedAt: new Date().toISOString(),
    apiClient: 'Azamat Karimov',
    provider: 'Football-Data.org'
  }, null, 2));

  console.log(`Successfully saved real API data to ${outputFilePath}`);
}

main().catch(console.error);
