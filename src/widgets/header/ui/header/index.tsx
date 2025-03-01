import { Button, IconRefresh } from '@/shared/ui'
import Image from 'next/image'
import styles from './styles.module.scss'

export default function Header() {
	return (
		<header className={styles.header}>
			<Image src='logo.svg' alt='FTOYD logo' width={257} height={32} />
			<Button>
				Обновить
				<IconRefresh />
			</Button>
		</header>
	)
}
