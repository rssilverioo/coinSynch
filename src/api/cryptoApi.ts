import { Cryptocoins } from '@/services/cryptocoins';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rest.coinapi.io/',
  headers: {
    'X-CoinAPI-Key': 'F50247C8-D2FE-4E13-B1D0-85C523990139',
  },
});


interface Props {
  crypto: Cryptocoins[];
}

export async function getCryptos(): Promise<Cryptocoins[]> {
  const response = await api.get<Cryptocoins[]>('v1/assets', {
    params: {
      type: 'BTC,ETH,LTC', // list of desired cryptocurrencies
      limit: 10
    },

  });
const data = response.data;
data.length = 10

return data;
}


// export const getStaticProps: GetStaticProps<Props> = async (context) => {
//   const headers = {
//     'X-CoinAPI-Key': 'E687BA43-61A4-4909-A613-A3147AF94732',
//   };
//   const response = await axios.get<Cryptocoins[]>('https://rest.coinapi.io/v1/assets', {
//     headers,
//   });
//   const data = response.data;
//   data.length = 10

//   return {
//     props: {
//       data,
//     },
//     revalidate: 60,
//   };
// };
