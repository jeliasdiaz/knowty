import { useContext } from "react"
import { darkModeContext } from "../context/DarkModeContext"

export const ProgressBar = ({ progress }) => {
	const {isDarkMode} = useContext(darkModeContext)
	return (
		<div
			style={{
				width: '50%',
				height: '20px',
				borderRadius: '15px',
				backgroundColor: isDarkMode ? '#1a4b61' : '#bfdfed',
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
					backgroundColor: '#3aa0cc',
				}}
			/>
		</div>
	)
}
