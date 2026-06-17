export default async function handler(req, res) {
  const apiKey = process.env.API_KEY;
  // نطلب البيانات العامة للبطولة (Standings) إذا لم تتوفر مباريات
  const endpoint = 'https://v3.football.api-sports.io/standings?league=1&season=2026';
  
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
