import { SectionTitle, TopWave } from '../../../components'
import { renderMenuCards } from '../../../helpers/renderMenuCards'
import menuCards from './menuCards.json'
export const PhysicPractice = () => {
	return (
		<div className='homeCard'>
			<TopWave />
			<SectionTitle title='Practica' />

			<div className='mobileSubjectMenu'>{renderMenuCards(menuCards)}</div>
		</div>
	)
}
