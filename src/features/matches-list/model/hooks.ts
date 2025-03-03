import { getMatches } from '@/entities/match'
import { QUERY_KEYS } from '@/shared/constants'
import { useQuery } from '@tanstack/react-query'

export const useMatches = () => {
	const {
		data: matches,
		error,
		isLoading,
		isRefetching,
	} = useQuery({
		queryKey: [QUERY_KEYS.MATCHES],
		queryFn: getMatches,
		staleTime: 5 * 60 * 1000,
		retry: false,
		placeholderData: prev => prev,
	})

	return {
		matches,
		isLoading: isLoading || isRefetching,
		error: error?.message,
	}
}
