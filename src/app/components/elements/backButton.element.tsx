'use client'

import { useRouter } from 'next/navigation'
import Button from '@/components/elements/button.element'

export default function BackButton({ text, icon }: { text: string, icon: any }) {
	const router = useRouter()

	const handleBackClick = () => {
		router.back()
	}

	return (
		<Button
			className='p-2 w-[320px]'
			content={text}
			style='iconText'
			tag='button'
			icon={icon}
			onClick={handleBackClick}
		/>
	)
}