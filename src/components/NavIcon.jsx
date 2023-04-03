import { NavLink } from 'react-router-dom'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import "react-tooltip/dist/react-tooltip.css";
import PropTypes from 'prop-types'

export const NavIcon = ({ path, icon, tooltipContent, tooltipId }) => {
    return (
        <>
            <span id={tooltipId} data-tooltip-content={tooltipContent}>
                <NavLink to={path} >{icon}</NavLink>
            </span>
            <ReactTooltip
                anchorId={tooltipId}
                style={{ backgroundColor: "#337ab7", color: "#fff", padding: "5px" }}
                delayShow={300}
            />
        </>
    )
}

NavIcon.propTypes = {
    path: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    tooltipContent: PropTypes.string.isRequired,
    tooltipId: PropTypes.string.isRequired,
}