import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";
const CollapseTitle = ({ name, id }) => {
    const [IsClicked, setIsClicked] = useState(false)

    const HandleArrow = () => {
        IsClicked  ? setIsClicked(false) : setIsClicked(true)
    }
    return (
        <div className="d-flex collapseTitle mb-2 align-items-center" data-bs-toggle="collapse" href={id} role="button" onClick={HandleArrow}>
            {
                IsClicked === false ? <MdOutlineKeyboardArrowDown size={45} /> : <MdOutlineKeyboardArrowUp size={45}  />
            }
            <h3>{name}</h3>
        </div>
    )
}

export default CollapseTitle