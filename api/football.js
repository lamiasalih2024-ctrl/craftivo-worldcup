export default async function handler(req, res) {
  const { type } = req.query;
  const apiKey = 'YOUR_API_KEY'; // ضعي مفتاح الـ API الخاص بك هنا
  
  // رابط الـ API الأساسي (تأكدي من صحة الروابط حسب اشتراكك)
  const endpoint = type === 'standings' 
    ? 'https://v3.football.api-sports.io/standings?league=1&season=2026'
    : 'https://v3.football.api-sports.io/fixtures?league=1&season=2026';

  try {
    const response = await fetch(endpoint, {
      headers: { 'x-apisports-key': apiKey }
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
e3af6b67b2839b4a1526bd2a3ab00e30
