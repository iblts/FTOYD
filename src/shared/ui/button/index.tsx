import classNames from 'classnames'
import type { ButtonHTMLAttributes } from 'react'
import styles from './styles.module.scss'

export default function Button({
	children,
	className,
	style,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button className={classNames(styles.button, className)} {...props}>
			{children}
		</button>
	)
}
