import { Link } from "react-router-dom"
import { BiChevronRight } from "react-icons/bi";

const SubjectCard = ({path, img, title, marginTop}) => {
    return (
        <Link to={path} className="text-decoration-none text-black">
            <div className={`subjectLink d-flex ownShadow ${marginTop}`} data-aos="zoom-in-down" data-aos-duration="1400" data-aos-once="true">
                <img src={`/img/${img}Icon.png`} alt="Subject img" className="w-25 pe-2" />
                <h4 className="ps-2">{title}</h4>
                <BiChevronRight size={45} className="BiChevronRight" />
            </div>
        </Link>
    )
}

export default SubjectCard