import { MATCH_STATUS } from '../constants'
import { ValuesOf } from '../utilits'

export interface Match {
	time: string
	title: string
	homeTeam: Team
	awayTeam: Team
	homeScore: number
	awayScore: number
	status: MatchStatus
}

export type MatchStatus = ValuesOf<typeof MATCH_STATUS>

export interface Team {
	name: string
	players: Player[]
	points: number
	place: number
	total_kills: number
}

export interface Player {
	username: string
	kills: number
}

export interface Response<T> {
	data: T
	ok: boolean
}
