'use client'

import { useRouter } from 'next/navigation'
import Button from '@/components/elements/button.element'

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
			<Button style='gray' tag='button' icon='CompassSvg' onClick={handleBackClick} />
			<Button style='gray' tag='button' icon='UsersSvg' onClick={handleReportClick} />
		</footer>
	)
}