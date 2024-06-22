import Image from 'next/image'
import Link from 'next/link'
import Title from '@/components/elements/title.element'
import Resources from './resources.section'

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
			{page !== 'main' && <div>
				<button>

				</button>
				<Resources />
				<button>

				</button>
			</div>}
			{title && <Title
				className='text-center'
				content={title}
				tag='h1'
				style='title-1' />}
		</header>
	)
}