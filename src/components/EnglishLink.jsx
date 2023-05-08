import { Link } from "react-router-dom"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { useContext, useState } from "react"
import { titleContext } from "../context/TitleContextSubject"
import PropTypes from 'prop-types'

export const EnglishLink = ({ title, path }) => {
    const { onTitleSubject } = useContext(titleContext)
    const handleClick = () => {
        onTitleSubject(title)
        setIsOpen(!isOpen)
    }

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Link to={path} className="englishLink" onClick={handleClick}>
            <div className="d-flex">
                {
                    !isOpen
                        ? <MdOutlineKeyboardArrowDown size={40} className="collapseTitleIconDown" />
                        : <MdOutlineKeyboardArrowDown size={40} className="collapseTitleIconUp" />
                }
                <h4>{title}</h4>
            </div>
        </Link>
    )
}

EnglishLink.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
};