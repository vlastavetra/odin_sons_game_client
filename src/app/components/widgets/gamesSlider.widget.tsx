import { GamesPageData } from '@/interfaces/game.interface'
import GameCard from '@/components/modules/gameCard.module'


export default async function GamesSlider({ data }: { data: GamesPageData }) {
  return (
    <div className='w-full overflow-x-auto scrollbar-thin'>
      <div className='flex space-x-5 pb-4'>
        {data.games.map((game) => (
          <GameCard key={game.id} {...game} />
        ))}
      </div>
    </div>
  )
}
