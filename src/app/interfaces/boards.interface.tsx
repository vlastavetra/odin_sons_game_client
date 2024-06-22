export interface BoardsData {
  boards: Board[]
}

export interface Board {
  boardId: string
  name: string
  owner: string
  location: string
  bid: string
  playersTotal: string
  playersOnline: string
}