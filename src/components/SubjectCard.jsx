import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import { BiChevronRight } from "react-icons/bi";
import { useEffect, useState } from "react";

export const SubjectCard = ({ path, img, title, marginTop, animationDelay }) => {

    const [angle, setAngle] = useState(20);
    useEffect(() => {
        const handleScroll = () => {
            const newAngle = Math.max(0, 20 - window.scrollY / 30);
            setAngle(newAngle);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <>
            <Link to={path} className="text-decoration-none text-black d-none d-sm-block" data-aos="fade-down" data-aos-duration={animationDelay} data-aos-once="true" style={{ transform: `translate(30px) rotate(${angle}deg)` }}>
                <div className={`subjectLink d-flex ownShadow-sm ${marginTop} animation`}>
                    <img src={`/img/${img}Icon.png`} alt="Subject img" className=" pe-2 animation" />
                    <h5 className="ms-2 animation">{title}</h5>
                    <BiChevronRight size={45} className="BiChevronRight animation" />
                </div>
            </Link>

            <Link to={path} className="text-decoration-none text-black d-block d-sm-none" >
                <div className={`subjectLink d-flex ownShadow ${marginTop} animationMobile`} data-aos="fade-down" data-aos-duration={animationDelay} data-aos-once="true">
                    <img src={`/img/${img}Icon.png`} alt="Subject img" className="w-25 pe-2 animation" />
                    <h5 className="ms-2 animation">{title}</h5>
                    <BiChevronRight size={45} className="BiChevronRight animation" />
                </div>
            </Link>

        </>
    )
}

SubjectCard.propTypes = {
    path: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    marginTop: PropTypes.string,
    animationDelay: PropTypes.number.isRequired,
}