export const ProgressBar = ({ progress }) => {
	return (
		<div
			style={{
				width: '50%',
				height: '20px',
				borderRadius: '15px',
				border: '1px solid #2b7ea1',
				marginInline: 'auto',
			}}
		>
			<div
				style={{
					width: `${progress}%`,
					transition: 'ease .4s',
					height: '100%',
					borderRadius: '15px',
					border: '1px',
					backgroundColor: '#2b7ea1',
				}}
			/>
		</div>
	)
}
