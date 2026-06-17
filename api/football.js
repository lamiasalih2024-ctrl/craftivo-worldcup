export default async function handler(req, res) {
  const url = 'https://v3.football.api-sports.io/fixtures?live=all&league=1';
  
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': process.env.API_KEY // تأكدي أن هذا المتغير مضبوط عندك في Vercel
    }
  });

  const data = await response.json();
  res.status(200).json(data);
}
