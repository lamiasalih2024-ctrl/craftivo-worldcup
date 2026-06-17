export default async function handler(req, res) {
  const apiKey = process.env.API_KEY;
  const endpoint = 'https://v3.football.api-sports.io/status'; // رابط تجريبي بسيط

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
