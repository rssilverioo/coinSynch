import { Cryptocoins } from '@/services/cryptocoins';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rest.coinapi.io/',
  headers: {
    'X-CoinAPI-Key': '8AC201B3-EBB4-4F9A-BDA0-09EF5FF2DD54',
  },
});


interface Props {
  crypto: Cryptocoins[];
}

export async function getCryptos(): Promise<Cryptocoins[]> {
  const response = await api.get<Cryptocoins[]>('v1/assets', {
    params: {
      asset_id: 'BTC,ETH,LTC', // list of desired cryptocurrencies
      limit: 10
    },

  });
const data = response.data;
data.length = 10

return data;
}

