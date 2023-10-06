import { useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import * as ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types'

export const Tooltip = ({ content, text, id }) => {
    const [hover, setHover] = useState(false)
    const onHover = () => setHover(!hover)
    return (
        <>
            <span id={id}
                data-tooltip-html={ReactDOMServer.renderToString(
                    <span style={{ textAlign: "justify", hyphens: "auto" }}>{content}</span>
                )}
                type="button">
                <span
                    style={
                        {
                            paddingLeft: "0px",
                            paddingRight: "0px",
                            textDecoration: hover ? "underline" : "",
                            textUnderlineOffset: hover ? "3px" : "2px",
                            color: "#3aa0cc",
                        }
                    }
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                >
                    {text}
                </span>
            </span><ReactTooltip
                anchorId={id}
                place="top"
                style={{
                    color: "white",
                    width: "fit-content"
                }}
                className="tooltipBackground ownShadow-sm"
                delayShow={100}
                clickable={true}
            />
        </>
    )
}

Tooltip.propTypes = {
    content: PropTypes.object.isRequired,
    text: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
}