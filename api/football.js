export default async function handler(req, res) {
  const apiKey = process.env.API_KEY; 
  // قمت بتغيير الرابط ليجلب بيانات كأس العالم 2026 برقم البطولة الموحد (1)
  const endpoint = 'https://v3.football.api-sports.io/leagues?id=1';

  try {
    const response = await fetch(endpoint, {
      headers: { 
        'x-apisports-key': apiKey,
        'x-rapidapi-host': 'v3.football.api-sports.io'
      }
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'تعذر الاتصال' });
  }
}
