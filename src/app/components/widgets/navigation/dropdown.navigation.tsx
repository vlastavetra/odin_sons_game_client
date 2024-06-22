import classNames from 'classnames'
import BackButton from '@/components/elements/backButton.element'
import NavigationList from './list.navigation'
import NavigationTitle from './title.navigation'

const styles: { [key: string]: string } = {
	'top-left': '-bottom-3 left-0 translate-y-[100%]',
	'top-right': '-bottom-3 left-0 translate-y-[100%]',
	'bottom-left': '-top-3 left-0 -translate-y-[100%]',
	'bottom-right': '-top-3 right-0 -translate-y-[100%]'
}

export default function NavigationDropdown({ content, isOpen, type }:
	{ content?: any, isOpen?: boolean, type: string }) {
	return (
		<div
			className={classNames([styles[type], 'absolute pb-5 bg-d-black-2 shadow-xl rounded-lg w-[360px]'])}
		>
			{content.title && <NavigationTitle content={content.title} />}
			{content.list && <NavigationList content={content.list} />}
			{
				content.function &&
				<div className='border-t border-d-dark-gray pt-4 w-full flex justify-center'>
					<BackButton text={content.function.text} icon={content.function.icon} />
				</div>
			}
			{content.title2 && <NavigationTitle content={content.title2} />}
		</div>
	)
}