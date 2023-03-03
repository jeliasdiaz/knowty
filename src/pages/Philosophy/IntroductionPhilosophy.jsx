import React from 'react'
import { SectionTitle, TopWave } from '../../components'
import { PhilosophyNav } from './PhilosophyNav'

export const IntroductionPhilosophy = () => {
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Introducción" />

            <PhilosophyNav />

            <div className="subjectCard ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <h3>Introducción</h3>
                <p>
                    Etimológicamente, la palabra filosofía se divide en <i>filo</i> que significa amor y <i>sofía</i> que equivale a sabiduría. Es decir, amor por la sabiduría.
                </p>
            </div>
        </div>
    )
}
