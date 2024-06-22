import Text from '@/components/elements/text.element'

export default function NavigationTitle({ content }: { content?: any }) {
	return (
		<div className='border-b border-d-dark-gray px-7 pt-5 pb-6'>
			<Text className='text-d-white opacity-50' content={content} style='text-3xl' tag='span' />
		</div>
	)
}