import { Link } from "react-router-dom"
import { BiChevronRight } from "react-icons/bi";

const SubjectCard = ({path, img, title, settingOne, settingTwo, settingThree}) => {
    return (
        <Link to={`/${path}`} className={`text-decoration-none text-black ${settingOne}`}>
            <div className={`subjectLink d-flex ownShadow ${settingTwo}`} data-aos="zoom-in-down" data-aos-duration="1400" data-aos-once="true">
                <img src={`/img/${img}Icon.png`} alt="" className="w-25 pe-2 " />
                <h4 className={`ps-2 ${settingThree}` }>{title}</h4>
                <BiChevronRight size={45} className="BiChevronRight" />
            </div>
        </Link>
    )
}

export default SubjectCard