import Balance from "@/components/atoms/Balance";
import { DailyVariation } from "@/components/atoms/DailyVariation";
import { NFT } from "@/components/atoms/NFT";
import { Cryptocoins } from "@/services/cryptocoins";

interface Props {
  crypto: Cryptocoins[];
}


export function CardDashboard(props: Props){
  return (
  <>
  <Balance />
  <DailyVariation chartData={props.crypto} />
  <NFT/>

  </>)
}
