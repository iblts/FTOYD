import { getMatches } from '@/entities/match'
import { useQuery } from '@tanstack/react-query'

export const useMatches = () => {
	const { data, error, isLoading } = useQuery({
		queryKey: ['matches'],
		queryFn: getMatches,
		staleTime: 5 * 60 * 60,
	})
	const matches = data?.data.matches

	return {
		matches,
		isLoading,
		error: error?.message,
	}
}
