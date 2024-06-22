import { BoardsData } from '@/interfaces/boards.interface'

export async function fetchBoardListData(): Promise<BoardsData> {
  const response = await fetch('http://localhost:3000/api/boards')
  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText)
  }
  const data = await response.json()
  return data
}