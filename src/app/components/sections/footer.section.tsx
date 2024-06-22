import Navigation from '@/components/widgets/navigation/navigation.widget'

const footerNav = {
	'left': {
		title: 'Быстрый переход',
		list: [
			{
				id: 1,
				icon: 'MapSvg',
				text: 'Сюжетная компания',
				link: '/',
			},
			{
				id: 2,
				icon: 'GlobeSvg',
				text: 'Сетевая игра',
				link: '/',
			},
			{
				id: 3,
				icon: 'CartSvg',
				text: 'Магазин',
				link: '/',
			},
			{
				id: 4,
				icon: 'FlagSvg',
				text: 'Достижения',
				link: '/',
			},
			{
				id: 5,
				icon: 'BookSvg',
				text: 'Обучение',
				link: '/',
			},
		],
		function: {
			icon: 'ArrowBackSvg',
			text: 'Вернуться назад',
			function: 'Back',
		}
	},
	'right': {
		title: 'Онлайн',
		title2: 'Не в сети',
	}
}
const styles =
	`w-full flex justify-between items-center align-self: flex-end
	py-8 px-10`

export default function Footer() {
	return (
		<footer className={styles}>
			<Navigation content={footerNav.left} type='bottom-left' icon='CompassSvg' />
			<Navigation content={footerNav.right} type='bottom-right' icon='UsersSvg' />
		</footer>
	)
}