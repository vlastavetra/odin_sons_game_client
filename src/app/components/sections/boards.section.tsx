import { fetchBoardListData } from '@/api/boards'
import { BoardsData } from '../../interfaces/boards.interface'
import TablesTable from '../widgets/tablesTable.widget'

const styles =
	`w-full h-[720px]
	bg-d-dark-gray
	p-4 rounded-lg cursor-pointer`


export default async function Boards() {
	const data: BoardsData = await fetchBoardListData()
	console.log(data)
	return (
		<div className={styles}>
			<div className='flex justify-between mb-20'>
				<span>490 столов онлайн</span>
				<h2>Игровые столы</h2>
				<button>Oбновить</button>
			</div>
			<TablesTable {...data} />
		</div>
	)
}