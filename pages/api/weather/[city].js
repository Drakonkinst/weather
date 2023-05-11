// Request should include info about what city it wants
export default async function getWeather(req, res) {
    const key = process.env.WEATHER_API_KEY
    
    const { city } = req.query; // Dynamically get city name based on API call
    // It's a JSON style object so we need to destructure it

    const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`;
    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);
}