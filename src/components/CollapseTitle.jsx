import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";
const CollapseTitle = ({ name, id }) => {
    const [IsClicked, setIsClicked] = useState(false)

    const HandleArrow = () => {
        IsClicked === false ? setIsClicked(true) : setIsClicked(false)
    }
    return (
        <div className="d-flex collapseTitle mb-2" data-bs-toggle="collapse" href={id} role="button" onClick={HandleArrow}>
            {
                IsClicked === false ? <MdOutlineKeyboardArrowDown size={45} className="BiChevronRight" /> : <MdOutlineKeyboardArrowUp size={45} className="BiChevronRight" />
            }
            <h3>{name}</h3>
        </div>
    )
}

export default CollapseTitle