'use client'

import { useRouter } from 'next/navigation'
import { ArrowSvg, MessageSvg } from '@/components/elements/icon.element'
import Text from '@/components/elements/text.element'

const styles =
	`w-full flex justify-between items-center
	py-8 px-10
	align-self: flex-start`

export default function Footer() {
	const router = useRouter()

	const handleBackClick = () => {
		router.back()
	}

	const handleReportClick = () => {
		console.log('report')
	}

	return (
		<footer className={styles}>
			<button
				onClick={handleBackClick}
				className='px-4 py-2 bg-gray-800 text-white rounded mb-5 flex gap-1'
			>
				<ArrowSvg />
				<Text className='opacity-50 font-gilroy' content='Назад' style='copy-1' tag='span' />
			</button>
			<button
				onClick={handleReportClick}
				className='px-4 py-2 bg-gray-800 text-white rounded mb-5 flex gap-1'
			>
				<Text className='opacity-50 font-gilroy' content='Сообщить об ошибке' style='copy-1' tag='span' />
				<MessageSvg />
			</button>
		</footer>
	)
}