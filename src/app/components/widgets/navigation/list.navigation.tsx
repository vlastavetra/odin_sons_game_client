import Button from '@/components/elements/button.element'

export default function NavigationList({ content }: { content?: any }) {
	return (
		<ul className='flex flex-col gap-3 p-5'>
			{content.map((item: any) => (
				<li key={item.id}>
					<Button className='p-2 w-[320px]' content={item.text} style='iconText' tag='link' icon={item.icon} link={item.link} />
				</li>
			))}
		</ul>
	)
}