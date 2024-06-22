import Header from '@/components/sections/header.section'
import MainHOC from '@/components/hoc/main.hoc'
import Link from 'next/link'

const styles =
  `bg-d-light-green p-10 rounded-lg text-d-black font-galaktika text-4xl cursor-pointer`

export default function Home() {
  return (
    <>
      <Header page='main' />
      <MainHOC>
        <Link href='/game'>
          <button className={styles}>
            Сетевая игра
          </button>
        </Link>
      </MainHOC>
    </>
  )
}
