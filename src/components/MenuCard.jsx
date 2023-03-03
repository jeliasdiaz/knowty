import { Link } from "react-router-dom"

export const MenuCard = ({ url, img, title }) => {
    return (
        <Link to={url} className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex ownShadow" data-aos="fade-up" data-aos-duration="1000">
                <img src={`/img/${img}`} alt="subject img" className="w-25 pe-2" />
                <h2 className="pt-4 ps-2">{title}</h2>
            </div>
        </Link>
    )
}
