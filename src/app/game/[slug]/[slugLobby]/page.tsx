import { fetchGameListData } from '@/api/games'
import { GamesPageData } from '@/interfaces/game.interface'
import Header from '@/components/sections/header.section'
import MainHOC from '@/components/hoc/main.hoc'
import HeroCard from '@/components/modules/heroCard.module'
import Footer from '@/components/sections/footer.section'
import Title from '@/components/elements/title.element'

const styles =
  `h-[720px] p-10 min-w-[320px]
	flex flex-col	items-center justify-center
	bg-d-dark-gray rounded-lg`

export default async function GamesPage() {
  const data: GamesPageData = await fetchGameListData()
  return (
    <>
      <Header title='Сетевая игра' />
      <MainHOC>
        <div className='w-full overflow-x-auto scrollbar-thin'>
          <div className='flex space-x-5 pb-4'>
            <HeroCard />
            <HeroCard />
            <div className={styles}>
              <Title
                className='text-center'
                content='Локация'
                tag='h2'
                style='title-2' />
            </div>
            <HeroCard />
            <HeroCard />
          </div>
        </div>
      </MainHOC>
      <button className='p-4 bg-d-light-green rounded-lg text-d-black'>Готов к игре</button>
      <Footer />
    </>
  )
}
