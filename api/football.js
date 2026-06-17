export default async function handler(req, res) {
  const { type, league } = req.query;
  const apiKey = process.env.API_KEY;
  
  // نحدد الرابط بناءً على المطلوب
  let endpoint = 'https://v3.football.api-sports.io/leagues?id=1'; // كأس العالم
  if (type === 'fixtures') {
    endpoint = `https://v3.football.api-sports.io/fixtures?league=1&season=2026`;
  }

  try {
    const response = await fetch(endpoint, {
      headers: { 'x-apisports-key': apiKey }
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'خطأ في الاتصال' });
  }
}
