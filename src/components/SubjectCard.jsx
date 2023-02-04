import { Link } from "react-router-dom"
import { BiChevronRight } from "react-icons/bi";

const SubjectCard = ({path, img, title, marginTop, animationDuration}) => {
    return (
        <Link to={path} className="text-decoration-none text-black" data-aos="fade-down" data-aos-duration={animationDuration} data-aos-once="true">
            <div className={`subjectLink d-flex ownShadow ${marginTop}`} >
                <img src={`/img/${img}Icon.png`} alt="Subject img" className="w-25 pe-2" />
                <h5 className="ms-2">{title}</h5>
                <BiChevronRight size={45} className="BiChevronRight" />
            </div>
        </Link>
    )
}

export default SubjectCard