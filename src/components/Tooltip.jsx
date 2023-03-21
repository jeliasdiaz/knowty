import { Tooltip as ReactTooltip } from "react-tooltip";
import * as ReactDOMServer from 'react-dom/server';
import { useState } from "react";

export const Tooltip = ({ content, text }) => {
    const [hover, setHover] = useState(false)
    const onHover = () => setHover(!hover)
    return (
        <>
            <span id="sales"
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
                anchorId="sales"
                place="top"
                style={{
                    color: "white"
                }}
                className="tooltipBackground ownShadow-sm"
                delayShow={100}
                clickable={true}
            />
        </>
    )
}
