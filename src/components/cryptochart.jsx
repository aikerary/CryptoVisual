import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CryptoChart = ({ cryptoId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://s4c7ant0j3.execute-api.us-east-2.amazonaws.com/default/precios/${cryptoId}`);
        const data = await response.json();
        const labels = data.map((entry) => entry.Fecha);
        const prices = data.map((entry) => parseFloat(entry.Precio));

        setChartData({
          labels,
          datasets: [
            {
              label: `${cryptoId} Price`,
              data: prices,
              borderColor: 'rgb(53, 162, 235)',
              backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [cryptoId]);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="chart-container">
      <Line data={chartData} />
    </div>
  );
};

export default CryptoChart;