import { API_ROUTES } from '@/shared/constants'
import { Match, Response } from '@/shared/types'

export const getMatches = async (): Promise<
	Response<{ matches: Match[] }> | undefined
> => {
	const res = await fetch(API_ROUTES.MATCHES)
	return await res.json()
}
