'use client'

import { IconTeam } from '@/shared/ui'
import { useMatches } from '../../model/hooks'
import styles from './styles.module.scss'

export default function MatchesList() {
	const { matches, isLoading, error } = useMatches()

	if (isLoading) {
		return <h1>Loading...</h1>
	}

	return (
		<ul className={styles.list}>
			{matches?.map(match => (
				<li
					className={styles.match}
					key={
						match.awayTeam.name +
						match.homeTeam.name +
						match.time +
						match.status
					}
				>
					<div className={styles.team}>
						<IconTeam />
						{match.homeTeam.name}
					</div>

					<span className={styles.scores}>
						{match.homeScore}:{match.awayScore}
					</span>
					<div className={styles.team}>
						{match.awayTeam.name}
						<IconTeam />
					</div>
				</li>
			))}
		</ul>
	)
}
