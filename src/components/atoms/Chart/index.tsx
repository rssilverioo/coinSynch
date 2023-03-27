import { useEffect, useState } from "react";
import { getCryptos } from "@/api/cryptoApi";
import { Cryptocoins } from "@/services/cryptocoins";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  crypto: Cryptocoins[];
}

export function Chart(props: Props) {
  const [chartData, setChartData] = useState<any>({
    labels: [],
    datasets: [{
      data: [],
      fill: false,
      borderColor: '#F4CC8F',
      backgroundColor: 'linear-gradient(to top,#F4CC8F, #FFF6E8)'
    }]
  });

  useEffect(() => {
    const fetchChartData = async () => {
      const data = await getCryptos();
      if (data && Array.isArray(data)) {
        const chartData = {
          labels: data?.map((item) => item.asset_id) ?? [],
          datasets: [{
            label: '',
            data: data?.map((item) => item.price_usd) ?? [],
            fill: false,
            borderColor: '#F4CC8F',
            backgroundColor: 'linear-gradient(to top,#F4CC8F, #FFF6E8)'
          }]
        };

        setChartData(chartData);
        console.log("data aqui ----->", chartData)
      }
    };

    fetchChartData();
  }, []);

  return (
  <>
    <Line data={chartData} />

  </>
  );
}
