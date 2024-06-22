'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BoardsData, Board } from '@/interfaces/boards.interface'

const headers = [
	{ key: 'id', title: 'Название' },
	{ key: 'owner', title: 'Владелец' },
	{ key: 'location', title: 'Локация' },
	{ key: 'bid', title: 'Ставка' },
	{ key: 'playersOnline', title: 'Свободно' }
]

export default function TablesTable({ boards }: BoardsData) {
	const [rows, setRows] = useState(boards)
	const [sortConfig, setSortConfig] = useState<{ key: keyof Board; direction: 'asc' | 'desc' } | null>(null)

	const pathname = usePathname()

	const requestSort = (key: keyof Board) => {
		let direction: 'asc' | 'desc' = 'asc'
		if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
			direction = 'desc'
		}
		setSortConfig({ key, direction })
		sortArray(key, direction)
	}

	const sortArray = (key: keyof Board, direction: 'asc' | 'desc') => {
		const sortedArray = [...rows].sort((a, b) => {
			if (a[key] < b[key]) {
				return direction === 'asc' ? -1 : 1
			}
			if (a[key] > b[key]) {
				return direction === 'asc' ? 1 : -1
			}
			return 0
		})
		setRows(sortedArray)
	}

	return (
		<div className="container mx-auto mt-4">
			<table className="min-w-full bg-gray-800 text-white">
				<thead>
					<tr>
						{headers.map(({ key, title }) => (
							<th
								key={key}
								className="py-2"
								onClick={() => requestSort(key as keyof Board)}
							>
								{title}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rows?.map((row: Board) => (
						<tr key={row.boardId}>
							<td className="py-2 border-b border-gray-700">
								<Link href={`${pathname}/${row.boardId}`}>{`Стол ${row.boardId}`}</Link>
							</td>
							<td className="py-2 border-b border-gray-700">
								<Link href={`${pathname}/${row.boardId}`}>{row.owner}</Link>
							</td>
							<td className="py-2 border-b border-gray-700">
								<Link href={`${pathname}/${row.boardId}`}>{row.location}</Link>
							</td>
							<td className="py-2 border-b border-gray-700">
								<Link href={`${pathname}/${row.boardId}`}>{row.bid}</Link>
							</td>
							<td className="py-2 border-b border-gray-700">
								<Link href={`${pathname}/${row.boardId}`}>{row.playersOnline} из {row.playersTotal}</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}