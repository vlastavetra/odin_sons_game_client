export interface GamesPageData {
  games: Game[]
}

export interface Game {
  id: string
  name: string
  soloGame: boolean
  playersCountinGame: number
  text: string
  playersOnline: number
  gameActive: boolean,
  cover: string
}