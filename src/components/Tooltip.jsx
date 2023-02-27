import { Tooltip as ReactTooltip } from "react-tooltip";
import * as ReactDOMServer from 'react-dom/server';

export const Tooltip = ({ content, text }) => {
    return (
        <>
            <span id="sales"
                data-tooltip-html={ReactDOMServer.renderToString(
                    <span style={{ textAlign: "justify", hyphens: "auto" }}>{content}</span>
                )}
                type="button">
                <span style={{ paddingLeft: "0px", paddingRight: "0px", textDecoration: "underline", textUnderlineOffset: "2px" }}>{text}</span>
            </span><ReactTooltip
                anchorId="sales"
                place="top"
                style={{
                    color: "white"
                }}
                className="tooltipBackground"
                delayShow={100}
                clickable={true}
            />
        </>
    )
}
