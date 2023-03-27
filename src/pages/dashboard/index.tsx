import { AppLayout } from "@/components/organisms/AppLayout";
import styles from "./styles.module.scss";
import { CardDashboard } from "@/components/molecules/CardDashboard";
import { Wallet } from "@/components/molecules/Wallet";

export default function Dashboard() {
	return (
		<AppLayout>
			<div className={styles.bg}>
				<main className={styles.page_content}>
					<div className={styles.section}>
						<CardDashboard />
					</div>
          <Wallet />
				</main>
			</div>
		</AppLayout>
	);
}
