import React from 'react'
import { NavLink } from 'react-router-dom'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import "react-tooltip/dist/react-tooltip.css";

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