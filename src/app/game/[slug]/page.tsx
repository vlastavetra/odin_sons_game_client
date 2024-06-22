import Header from '@/components/sections/header.section'
import MainHOC from '@/components/hoc/main.hoc'
import HeroCard from '@/components/modules/heroCard.module'
import Boards from '@/components/sections/boards.section'
import Footer from '@/components/sections/footer.section'


export default async function BoardsPage() {
  return (
    <>
      <Header title='Сетевая игра' />
      <MainHOC>
        <div className='w-full flex justify-between gap-5 mb-20'>
          <HeroCard />
          <Boards />
        </div>
        <div className='flex gap-5'>
          <button className='p-4 bg-d-light-green rounded-lg text-d-black'>Быстрый старт</button>
          <button className='p-4 bg-d-gray rounded-lg text-d-black'>Создать</button>
          <button className='p-4 bg-d-gray rounded-lg text-d-black'>Подключиться</button>
        </div>
      </MainHOC>
      <Footer />
    </>
  )
}
