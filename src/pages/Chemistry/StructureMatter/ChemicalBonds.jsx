import { ContentsTable, SectionTitle, TopWave } from '../../../components'
import { structureMatterItems } from '.'
import { darkModeContext } from '../../../context/DarkModeContext';
import { useContext } from 'react';

export const ChemicalBonds = () => {
    const { isDarkMode } = useContext(darkModeContext);
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Enlaces químicos" />
            <ContentsTable items={structureMatterItems} />
            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <img src={isDarkMode === "dark" ? "/img/enlacesQuimicosDark.svg" : "/img/enlacesQuimicos.svg"} alt="Enlaces químicos" className="w-80 rounded-3 revealing-image" />
            </div>
        </div>
    )
}
