import type { MatchStatus } from '@/shared/types'
import classNames from 'classnames'
import styles from './styles.module.scss'

export default function MatchStatus({ status }: { status: MatchStatus }) {
	return (
		<div
			className={classNames(
				styles.matchStatus,
				styles[status.toLocaleLowerCase().replaceAll(' ', '_')]
			)}
		>
			{status}
		</div>
	)
}
