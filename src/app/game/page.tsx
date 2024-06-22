import { fetchGameListData } from '@/api/games'
import { GamesPageData } from '@/interfaces/game.interface'
import Header from '@/components/sections/header.section'
import Footer from '@/components/sections/footer.section'
import MainHOC from '@/components/hoc/main.hoc'
import GamesSlider from '@/components/widgets/gamesSlider.'


export default async function GamesPage() {
  const data: GamesPageData = await fetchGameListData()
  return (
    <>
      <Header title='Сетевая игра' />
      <MainHOC>
        <GamesSlider data={data} />
      </MainHOC>
      <Footer />
    </>
  )
}
