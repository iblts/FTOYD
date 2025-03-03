'use client'

import { MatchCard } from '@/entities/match'
import { useMatches } from '../../model/hooks'
import styles from './styles.module.scss'

export default function MatchesList() {
	const { matches, isLoading } = useMatches()

	if (isLoading) {
		return (
			<ul className={styles.list}>
				{new Array(6).fill('').map((_, i) => (
					<div key={i} className={styles.skeletonCard} />
				))}
			</ul>
		)
	}

	return (
		<ul className={styles.list}>
			{matches?.map(match => (
				<MatchCard
					match={match}
					key={
						match.awayTeam.name +
						match.homeTeam.name +
						match.time +
						match.status
					}
				/>
			))}
		</ul>
	)
}
