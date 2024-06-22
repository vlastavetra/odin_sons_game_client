import Image from 'next/image'
import Link from 'next/link'
import Title from '@/components/elements/title.element'
import Button from '@/components/elements/button.element'
import Resources from './resources.section'
import Navigation from '@/components/widgets/navigation/navigation.widget'

const headerNav = {
	'left': {
		list: [
			{
				id: 'hnl1',
				icon: 'MapSvg',
				text: 'Персонализация',
				link: '/',
			},
			{
				id: 'hnl2',
				icon: 'MapSvg',
				text: 'Друзья',
				link: '/',
			},
			{
				id: 'hnl3',
				icon: 'MapSvg',
				text: 'Рейтинги',
				link: '/',
			},

		],
		function: {
			icon: 'ArrowBackSvg',
			text: 'Сменить профиль',
			function: 'ChangeProfile',
		}
	},
	'right': {
		list: [
			{
				id: 1,
				icon: 'MapSvg',
				text: 'Сюжетная компания',
				link: '/',
			},
			{
				id: 1,
				icon: 'MapSvg',
				text: 'Сюжетная компания',
				link: '/',
			},
			{
				id: 1,
				icon: 'MapSvg',
				text: 'Сюжетная компания',
				link: '/',
			},
		],
		function: {
			icon: 'ArrowBackSvg',
			text: 'Вернуться назад',
			function: 'Error',
		},
		info: 'Версия: 4.9.1  Клиент: 78909321'
	}
}

const styles =
	`w-full flex justify-between items-center
	py-8 px-10
	align-self: flex-start`

export default function Header({ title, page }: { title?: string, page?: string }) {
	return (
		<header className={styles}>
			<Link href='/'>
				<Image src='/logo.svg' alt='Logo' width={121.67} height={100} />
			</Link>
			{page !== 'main' &&
				<div className='flex gap-2'>
					<Navigation content={headerNav.left} type='top-left' icon='UserSvg' />
					<Resources />
					<Navigation content={headerNav.right} type='top-right' icon='MenuSvg' />
				</div>
			}
			{title && <Title
				className='text-center'
				content={title}
				tag='h1'
				style='title-1' />}
		</header>
	)
}