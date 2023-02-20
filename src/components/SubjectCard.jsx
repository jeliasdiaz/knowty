import { Link } from "react-router-dom"
import { BiChevronRight } from "react-icons/bi";

export const SubjectCard = ({ path, img, title, marginTop, animationDelay }) => {
    return (
        <>
        <Link to={path} className="text-decoration-none text-black d-none d-sm-block" data-aos="fade-down" data-aos-duration={animationDelay} data-aos-once="true">
            <div className={`subjectLink d-flex ownShadow ${marginTop} animation`}>
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