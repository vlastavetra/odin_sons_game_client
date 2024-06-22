import Link from 'next/link'
import Image from 'next/image'
import { Game } from '@/interfaces/game.interface'
import Title from '@/components/elements/title.element'
import Text from '@/components/elements/text.element'
import { UserSvg, UsersSvg } from '@/components/elements/icon.element'

const styles =
	`w-[352px]
	flex flex-col items-center
	p-8 py-10
	bg-d-dark-gray rounded-lg`

export default function GameCard({ id, name, soloGame, playersCountinGame, text, playersOnline, gameActive, cover }: Game) {
	return (
		<Link href={`/game/${id}`}>
			<button
				key={id}
				className={`${styles} ${gameActive ? 'opacity-1 cursor-pointer' : 'opacity-40'}`}
				disabled={gameActive ? false : true} >
				<Title
					className='text-center pb-8'
					content={name}
					tag='h2'
					style='title-2' />
				<Image src={cover} alt={name} width={292} height={370} />
				<div className='pt-8 pb-6 flex gap-2'>
					<div className='bg-d-light-green rounded-full w-[40px] h-[40px] flex items-center justify-center'>
						{soloGame ? <UserSvg /> : <UsersSvg />}
					</div>
					<div className='border border-d-light-green border-2 rounded-full w-[40px] h-[40px] flex items-center justify-center'>
						<Text className='text-d-light-green' content={playersCountinGame} style='copy-1' tag='span' />
					</div>
				</div>
				<Text className='opacity-50 font-gilroy max-w-[272px] pb-6' content={text} style='copy-1' tag='span' />
				<div className='mt-auto flex gap-2'>
					<Text content={playersOnline} style='copy-1' tag='span' />
					<Text content='открытых столов' style='copy-1' tag='span' />
				</div>
			</button>
		</Link>
	)
}