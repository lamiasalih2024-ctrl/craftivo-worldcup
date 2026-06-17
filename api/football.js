export default async function handler(req, res) {
  const url = 'https://v3.football.api-sports.io/fixtures?live=all&league=1&season=2026';
  
  const response = await fetch(url, {
    headers: {
      'x-rapidapi-key': 'هنا_ضعي_مفتاحك_السري',
      'x-rapidapi-host': 'v3.football.api-sports.io'
    }
  });
  
  const data = await response.json();
  res.status(200).json(data);
}
