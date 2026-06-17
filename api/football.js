export default async function handler(req, res) {
  const apiKey = process.env.API_KEY;
  // طلب المباريات التي انتهت (Finished) والتي ستلعب (Scheduled)
  // League 1 هو كأس العالم، الموسم 2026
  const endpoint = 'https://v3.football.api-sports.io/fixtures?league=1&season=2026';
  
  try {
    const response = await fetch(endpoint, {
      headers: { 'x-apisports-key': apiKey }
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'خطأ اتصال' });
  }
}
