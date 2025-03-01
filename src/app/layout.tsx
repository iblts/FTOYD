import { QueryProvider } from '@/shared/providers/QueryClientProvider'
import { Container } from '@/shared/ui'
import { Header } from '@/widgets/header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'

const geistSans = Inter({
	subsets: ['latin', 'cyrillic'],
})
export const metadata: Metadata = {
	title: 'FTOYD',
	description: 'Тестовое задание для FTOYD',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${geistSans.className}`}>
				<QueryProvider>
					<Container>
						<Header />
						{children}
					</Container>
				</QueryProvider>
			</body>
		</html>
	)
}
