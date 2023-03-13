import { Link } from "react-router-dom"

export const MenuCard = ({ url, img, title }) => {
    return (
        <Link to={url} className="link-secondary text-decoration-none text-dark">
            <div className="subjectLink d-flex ownShadow" data-aos="fade-up" data-aos-duration="1000">
                <img src={`/img/${img}`} alt="subject img" className="w-25 pe-2" />
                <div className="d-inline-block align-middle" style={{ height: "30px", display: "flex", alignItems: "center" }}>
                    <h2 className="ps-2">{title}</h2>
                </div>
            </div>
        </Link >
    )
}
