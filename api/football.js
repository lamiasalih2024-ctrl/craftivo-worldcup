export default async function handler(req, res) {
  const apiKey = process.env.API_KEY; 
  
  // سنقوم بجلب بيانات الدوري الإنجليزي كمثال للتأكد من عمل الربط
  const endpoint = 'https://v3.football.api-sports.io/leagues?id=39';

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
