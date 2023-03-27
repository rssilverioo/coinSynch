import { AppLayout } from "@/components/organisms/AppLayout";
import styles from "./styles.module.scss";
import { CardDashboard } from "@/components/molecules/CardDashboard";
import { Wallet } from "@/components/molecules/Wallet";
import { Cryptocoins } from "@/services/cryptocoins";


interface Props {
  cryptoCoins: Cryptocoins[];
}

export default function Dashboard(props: Props) {
	return (
		<AppLayout>
			<div className={styles.bg}>
				<main className={styles.page_content}>
					<div className={styles.section}>
						<CardDashboard crypto={props.cryptoCoins}/>
					</div>
          <Wallet />
				</main>
			</div>
		</AppLayout>
	);
}
