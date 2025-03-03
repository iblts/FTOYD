import type { Match } from '@/shared/types'
import { IconTeam } from '@/shared/ui'
import MatchStatus from '../matchStatus'
import styles from './styles.module.scss'

export default function MatchCard({ match }: { match: Match }) {
	return (
		<li className={styles.match}>
			<div className={styles.team}>
				<IconTeam />
				{match.homeTeam.name}
			</div>
			<div className={styles.matchInfo}>
				<p>
					{match.homeScore} : {match.awayScore}
				</p>
				<MatchStatus status={match.status} />
			</div>
			<div className={styles.team}>
				{match.awayTeam.name}
				<IconTeam />
			</div>
		</li>
	)
}
