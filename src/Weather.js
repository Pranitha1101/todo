import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Weather() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiKey = 'a171aca2cfce45944b5917bcaf31eb26'; // 🔑 Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=51.51&lon=-0.13&exclude=minutely,hourly,alerts&units=metric&appid=${apiKey}`;

    axios.get(url)
      .then(res => {
        const daily = res.data.daily;
        setData({
          labels: daily.map(d => new Date(d.dt * 1000).toLocaleDateString()),
          datasets: [
            {
              label: 'Max Temp (°C)',
              data: daily.map(d => d.temp.max),
              borderColor: 'red',
              fill: false,
            },
            {
              label: 'Humidity (%)',
              data: daily.map(d => d.humidity),
              borderColor: 'blue',
              fill: false,
            }
          ]
        });
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  return (
    <div style={{ width: '80%', margin: '50px auto', textAlign: 'center' }}>
      <h2>🌤️ 7-Day Weather Forecast (London)</h2>
      {data ? <Line data={data} /> : <p>Loading...</p>}
    </div>
  );
}
