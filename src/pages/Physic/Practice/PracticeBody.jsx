export const PracticeBody = ({ props }) => {
	const {
		content,
		img,
		data,
		currentObject,
		subject,
		previousObject,
		nextObject,
		renderOptions,
		renderFeedback,
		renderProcess,
		validateOption,
		showSolution,
		onShowProcess,
	} = props
	return (
		<>
			<span>{content}</span>

			{img && (
				<>
					<br />
					<br />
				</>
			)}

			<img
				src={data[currentObject[subject]]?.img}
				className='img-fluid rounded'
				alt=''
			/>
			<br />
			<br />
			{renderOptions()}

			<br />
			<div className='d-flex mt-4'>
				<button className='btn btn-outline-secondary' onClick={previousObject}>
					Atrás
				</button>

				{renderFeedback()}

				<div className='d-flex gap-2 ms-auto'>
					<button className='btn btn-secondary' onClick={validateOption}>
						Enviar
					</button>

					<button className='btn btn-outline-secondary' onClick={nextObject}>
						Siguiente
					</button>
				</div>
			</div>
			<br />

			{showSolution && (
				<button
					className='btn btn-outline-secondary mt-3'
					type='button'
					onClick={onShowProcess}
				>
					Solución
				</button>
			)}

			{renderProcess()}
		</>
	)
}
