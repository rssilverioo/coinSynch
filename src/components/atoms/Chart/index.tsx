import { useEffect, useState } from "react";
import { debounce } from "lodash"; // import debounce function as api limiter
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


  const debouncedFetch = debounce(async () => {
    const response = await getCryptos();
    const labels = response.map((crypto: any) => crypto.asset_id);
    const data = response.map((crypto: any) => crypto.price_usd);

    setChartData({
      labels: labels,
      datasets: [{
        data: data,
        fill: false,
        borderColor: '#F4CC8F',
        backgroundColor: 'linear-gradient(to top,#F4CC8F, #FFF6E8)'
      }]
    });
  }, 500); // set a time interval (in ms) you want to avoid too many requests in a short time

  useEffect(() => {
    debouncedFetch(); // removido o argumento
  }, []);

  return (
    <>
      <Line data={chartData} />
    </>
  );
}
