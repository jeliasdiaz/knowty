import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
export const CollapseTitle = ({ name, id }) => {
    const [IsClicked, setIsClicked] = useState(false)

    const handleArrow = () => setIsClicked(!IsClicked)
    
    return (
        <div className="d-flex mb-2 align-items-center" data-bs-toggle="collapse" href={id} role="button" onClick={handleArrow}>
            {
                !IsClicked ? <MdOutlineKeyboardArrowDown size={40} className="collapseTitleIconDown"/> : <MdOutlineKeyboardArrowDown size={40} className="collapseTitleIconUp" />
            }
            <h4>{name}</h4>
        </div>
    )
}
