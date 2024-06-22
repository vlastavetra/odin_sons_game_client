const styles =
	`w-full h-full
	p-10
	align-self: flex-start grow`

export default function MainHOC({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<main className={styles}>
			{children}
		</main>
	)
}