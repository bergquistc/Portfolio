import TabController from "@/components/tabs/TabController"
import styles from "./page.module.css"

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<TabController />
			</main>
		</div>
	)
}
