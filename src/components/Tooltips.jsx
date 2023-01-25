import { Tooltip as ReactTooltip } from "react-tooltip";
import * as ReactDOMServer from 'react-dom/server';

const Tooltips = ({content, text }) => {
    return (
        <>
            <span id="sales"
                data-tooltip-html={ReactDOMServer.renderToString(
                    <p style={{ textAlign: "justify", hyphens: "auto" }}>{content}</p>
                )}
                type="button">
                <span style={{ paddingLeft: "10px", paddingRight: "5px", textDecoration: "underline", textUnderlineOffset: "2px" }}>{text}</span>
            </span><ReactTooltip
                anchorId="sales"
                place="top"
                style={{
                    backgroundColor: "#414344",
                    color: "white"
                }}
                delayShow={100} />
        </>
    )
}

export default Tooltips