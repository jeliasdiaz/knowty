import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import PropTypes from 'prop-types';

export const CollapseInformation = ({ name, id, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleArrow = () => {
            setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="d-flex mb-2 align-items-center" href={`#${id}`} role="button" onClick={handleArrow} data-bs-toggle="collapse" >
                {
                    !isOpen
                        ? <MdOutlineKeyboardArrowDown size={40} className="collapseTitleIconDown" />
                        : <MdOutlineKeyboardArrowDown size={40} className="collapseTitleIconUp" />
                }
                <h4>{name}</h4>
            </div>
            <div className="collapse" style={{transition: "height 0.5s ease ", overflow: "hidden"}} id={id}>
                {children}
            </div>
        </>
    )
}

CollapseInformation.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}