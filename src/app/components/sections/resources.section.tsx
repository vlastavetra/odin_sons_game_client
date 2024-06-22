import Image from 'next/image'
import Link from 'next/link'
import Text from '@/components/elements/text.element'
import { PlusSvg } from '@/components/elements/icon.element'

const content = [
	{ id: 'silver', text: 'Серебро', icon: '/user/resources/silver.png', link: '/' },
	{ id: 'rune', text: 'Руны', icon: '/user/resources/rune.png', link: '/' },
	{ id: 'opal', text: 'Опал', icon: '/user/resources/opal.png', link: '/' }
]

const userResources: { [key: string]: number } = {
	'silver': 8739023, 'rune': 345, 'opal': 980
}

export default function Resources() {
	return (
		<div className='flex gap-3 items-center'>
			{content.map((item) => (
				<div className='relative w-[180px] flex items-center bg-d-dark-gray rounded-md p-1'>
					<Text className='absolute -top-[25px] left-2/4 -translate-x-1/2 opacity-50' content={item.text} tag='span' style='copy-1' />
					<Image src={item.icon} alt={item.text} width={40} height={40} />
					<span>
						<Text className='ml-2' content={userResources[item.id]} tag='span' style='copy-1' />
					</span>
					<button className='bg-d-light-green ml-auto w-[36px] h-[36px] rounded flex justify-center items-center'>
						<PlusSvg />
					</button>
				</div>
			))}
		</div>
	)
}