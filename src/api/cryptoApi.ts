import { Cryptocoins } from '@/services/cryptocoins';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rest.coinapi.io/v1/',
  headers: {
    'X-CoinAPI-Key': '02BC8755-1EBE-448E-9969-9812838D8DB6',
  },
});


interface Props {
  crypto: Cryptocoins[];
}

export async function getCryptos(): Promise<Cryptocoins[]> {
  const response = await api.get<Cryptocoins[]>('assets', {
    params: {
      type: 'BTC,ETH,LTC', // list of desired cryptocurrencies
      limit: 10, // limit of results per page

    },
  });

  return response.data;
}
