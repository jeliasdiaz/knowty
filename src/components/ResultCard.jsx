import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

export const ResultCard = ({ url, name, img }) => {
    return (
        <Link to={url} className="text-decoration-none" key={name}>
            <div className="dataItem shadow d-flex align-items-center p-3 my-3">
                <img src={img} alt={name} className="CardImg pe-3" />
                {name}
            </div>
        </Link>
    )
}

ResultCard.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
}