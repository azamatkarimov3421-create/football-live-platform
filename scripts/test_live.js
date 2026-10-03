const https = require('https');
const token = '319a2c7bae61475a999de7a761a4f79e';

async function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'X-Auth-Token': token } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch(e) { resolve(data); }
      });
    }).on('error', reject);
  });
}

(async () => {
  console.log('Testing Football-Data.org API...');
  
  // 1. All matches today
  const todayMatches = await fetchUrl('https://api.football-data.org/v4/matches');
  console.log('Total matches today in API:', todayMatches.matches ? todayMatches.matches.length : 0);
  if (todayMatches.matches) {
    todayMatches.matches.forEach(m => {
      console.log(`- [${m.competition ? m.competition.code : ''}] ${m.homeTeam.name} vs ${m.awayTeam.name} (${m.status}) [${m.utcDate}]`);
    });
  }

  // 2. Competitions PL, PD, CL
  for (const comp of ['PL', 'PD', 'CL']) {
    const d = await fetchUrl(`https://api.football-data.org/v4/competitions/${comp}/matches`);
    if (d.matches) {
      console.log(`\n=== Competition ${comp} ===`);
      console.log('Total season matches:', d.matches.length);
      const inPlay = d.matches.filter(m => m.status === 'IN_PLAY' || m.status === 'PAUSED');
      console.log('Live in-play now:', inPlay.length);
      const finished = d.matches.filter(m => m.status === 'FINISHED');
      console.log('Finished matches count:', finished.length);
      const scheduled = d.matches.filter(m => m.status === 'TIMED' || m.status === 'SCHEDULED');
      console.log('Scheduled/Timed matches count:', scheduled.length);
      
      const last3 = finished.slice(-3);
      console.log('Last 3 finished:');
      last3.forEach(m => console.log(`  ${m.utcDate.slice(0, 10)}: ${m.homeTeam.shortName || m.homeTeam.name} ${m.score.fullTime.home}-${m.score.fullTime.away} ${m.awayTeam.shortName || m.awayTeam.name}`));
      
      const next3 = scheduled.slice(0, 3);
      console.log('Next 3 scheduled:');
      next3.forEach(m => console.log(`  ${m.utcDate.slice(0, 10)}: ${m.homeTeam.shortName || m.homeTeam.name} vs ${m.awayTeam.shortName || m.awayTeam.name} (${m.utcDate})`));
    } else {
      console.log('Error for', comp, d);
    }
  }
})();
