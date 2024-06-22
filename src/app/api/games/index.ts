import { GamesPageData } from '@/interfaces/game.interface'

export async function fetchGameListData(): Promise<GamesPageData> {
  const response = await fetch('http://localhost:3000/api/games')
  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText)
  }
  const data = await response.json()
  return data
}