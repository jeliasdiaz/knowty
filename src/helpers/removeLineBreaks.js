import PropTypes from "prop-types";
import React from "react";

export const removeLineBreaks = (text) => {
    const lines = text?.split("\n");
    return lines?.map((line, index) => <React.Fragment key={index}>{line}</React.Fragment>);
}

removeLineBreaks.propTypes = {
    text: PropTypes.string.isRequired
}