'use client'

import { QUERY_KEYS } from '@/shared/constants'
import { Button, IconAlert, IconRefresh } from '@/shared/ui'
import { useQueryClient } from '@tanstack/react-query'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

export default function RefreshButton() {
	const queryClient = useQueryClient()
	const [error, setError] = useState<string | null>(null)
	const [isFetching, setIsFetching] = useState(false)

	useEffect(() => {
		const updateState = () => {
			const queryState = queryClient.getQueryState([QUERY_KEYS.MATCHES])
			setError(queryState?.error?.message || null)
			setIsFetching(queryState?.fetchStatus === 'fetching')
		}

		const unsubscribe = queryClient.getQueryCache().subscribe(event => {
			if (event.query.queryKey[0] === QUERY_KEYS.MATCHES) {
				updateState()
			}
		})

		updateState()

		return () => unsubscribe()
	}, [queryClient])

	const handleRefresh = async () => {
		await queryClient.refetchQueries({ queryKey: [QUERY_KEYS.MATCHES] })
	}

	return (
		<div className={styles.body}>
			{error && (
				<div className={styles.error}>
					<IconAlert />
					{error}
				</div>
			)}
			<Button onClick={handleRefresh} disabled={isFetching}>
				Обновить
				<IconRefresh
					fill={isFetching ? '#787878' : undefined}
					className={classNames(styles.icon, { [styles.animate]: isFetching })}
				/>
			</Button>
		</div>
	)
}
