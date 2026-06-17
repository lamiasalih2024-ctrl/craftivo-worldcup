export default async function handler(req, res) {
  // تأكدي أن الاسم هنا هو نفس الاسم الذي كتبتيه في Vercel (MY_API_KEY)
  const apiKey = process.env.MY_API_KEY; 
  const endpoint = 'https://v3.football.api-sports.io/fixtures?live=all';

  try {
    const response = await fetch(endpoint, {
      headers: { 
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'v3.football.api-sports.io'
      }
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'فشل الاتصال' });
  }
}
