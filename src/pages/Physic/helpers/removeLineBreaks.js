import PropTypes from "prop-types";

export const removeLineBreaks = (text) => {
    const lines = text?.split("\n");
    return lines?.map((line, index) => <p key={index}>{line}</p>);
}

removeLineBreaks.propTypes = {
    text: PropTypes.string.isRequired
}