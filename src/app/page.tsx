import { MatchesList } from '@/features/matches-list'
import styles from './page.module.scss'

export default function Home() {
	return (
		<main className={styles.main}>
			<MatchesList />
		</main>
	)
}
