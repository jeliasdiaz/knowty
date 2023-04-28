import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import { useContext } from "react"
import { titleContext } from "../context/TitleContextSubject"

export const MenuCard = ({ url, img, title }) => {
    const { onTitleSubject } = useContext(titleContext);
    
    const handleClick = () => {
        onTitleSubject(title);
    };

    return (
        <Link to={url} className="link-secondary text-decoration-none text-dark" onClick={handleClick}>
            <div className="subjectLinkMenu ownShadow" data-aos="fade-up" data-aos-duration="1000">
                <div className="subjectLinkMenuContent">
                    <img src={`/img/${img}`} alt="subject img" className="w-25 pe-2" />
                    <h2>{title}</h2>
                </div>
            </div>
        </Link >
    )
}

MenuCard.propTypes = {
    url: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}
