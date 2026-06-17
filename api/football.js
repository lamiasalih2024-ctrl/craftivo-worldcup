export default async function handler(req, res) {
  try {
    const API_KEY = process.env.API_KEY;

    if (!API_KEY) {
      return res.status(500).json({
        success: false,
        message: "API Key missing in Vercel"
      });
    }

    const response = await fetch(
      "https://v3.football.api-sports.io/fixtures?season=2026",
      {
        headers: {
          "x-apisports-key": API_KEY
        }
      }
    );

    const data = await response.json();

    if (!data || !data.response) {
      return res.status(500).json({
        success: false,
        message: "No data from API"
      });
    }

    // تنظيف البيانات
    const matches = data.response.slice(0, 20).map(m => ({
      date: m.fixture.date,
      home: m.teams.home.name,
      away: m.teams.away.name,
      homeGoals: m.goals.home,
      awayGoals: m.goals.away,
      status: m.fixture.status.short
    }));

    res.status(200).json({
      success: true,
      response: matches
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
}
