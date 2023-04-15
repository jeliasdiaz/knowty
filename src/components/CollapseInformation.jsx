import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import PropTypes from 'prop-types';
import { useCollapse } from "react-collapsed";

export const CollapseInformation = ({ name, id, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const { getCollapseProps, getToggleProps } = useCollapse({ isOpen })

    return (
        <>
            <div className="d-flex mb-2 align-items-center" href={`#${id}`} {...getToggleProps({
                style: { display: "block" },
                onClick: () => setIsOpen((x) => !x)
            })} >
                {
                    !isOpen
                        ? <MdOutlineKeyboardArrowDown size={40} className="collapseTitleIconDown" />
                        : <MdOutlineKeyboardArrowDown size={40} className="collapseTitleIconUp" />
                }
                <h4>{name}</h4>
            </div>
            <div id={id} {...getCollapseProps()}>
                {children}
            </div>
        </>
    )
}

CollapseInformation.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}