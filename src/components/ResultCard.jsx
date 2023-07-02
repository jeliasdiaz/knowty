import { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import { titleContext } from "../context/TitleContextSubject";

export const ResultCard = ({ url, name, img }) => {
    const { onTitleSubject } = useContext(titleContext)
    const handleClick = () => {
        onTitleSubject(name);
    };

    return (
        url.includes('#')
            ? (
                <a href={url} className="text-decoration-none" key={name} onClick={handleClick}>
                    <div className="dataItem shadow d-flex align-items-center p-3 my-3">
                        <img src={img} alt={name} className="CardImg pe-3" />
                        {name}
                    </div>
                </a>
            )
            : (
                <Link to={url} className="text-decoration-none" key={name} onClick={handleClick}>
                    <div className="dataItem shadow d-flex align-items-center p-3 my-3">
                        <img src={img} alt={name} className="CardImg pe-3" />
                        {name}
                    </div>
                </Link>
            )
    )
}

ResultCard.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
}