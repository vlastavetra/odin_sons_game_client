import Image from 'next/image'
import Title from '@/components/elements/title.element'

const styles =
	`h-[720px] p-10 min-w-[320px]
	flex flex-col	items-center justify-center
	bg-d-dark-gray rounded-lg`

export default function HeroCard() {
	return (
		<div className={styles}>
			<Title
				className='text-center'
				content='текущий герой'
				tag='h2'
				style='title-2' />
			<Image
				src='/heroes/hero-1.png'
				alt='Description of the image'
				width={330}
				height={440}
			/>
		</div>
	)
}