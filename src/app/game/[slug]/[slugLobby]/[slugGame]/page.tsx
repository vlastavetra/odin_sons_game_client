import { fetchGameListData } from '@/api/games'
import { GamesPageData } from '@/interfaces/game.interface'
import Header from '@/components/sections/header.section'
import MainHOC from '@/components/hoc/main.hoc'
import GameCard from '@/components/modules/gameCard.module'


export default async function GamesPage() {
  const data: GamesPageData = await fetchGameListData()
  return (
    <>
      <Header title='Сетевая игра' />
      <MainHOC>
        Game
      </MainHOC>
    </>
  )
}
