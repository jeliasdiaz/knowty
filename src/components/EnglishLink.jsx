import { Link } from "react-router-dom"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { useContext } from "react"
import { titleContext } from "../context/TitleContextSubject"
import PropTypes from 'prop-types'

export const EnglishLink = ({isOpen, setIsOpen, title, path}) => {
    const {onTitleSubject} = useContext(titleContext)
    const handleClick = () => {
        onTitleSubject(title)
        setIsOpen(!isOpen)
    }
    
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
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
};