import type { HTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface Props extends HTMLAttributes<HTMLDivElement> {
	width?: number
	padding?: number
}

export default function Container({
	children,
	width = 1920,
	padding = 42,
	...props
}: Props) {
	return (
		<div
			className={styles.container}
			style={{
				maxWidth: width,
				padding,
			}}
			{...props}
		>
			{children}
		</div>
	)
}
