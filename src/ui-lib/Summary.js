import PropTypes from "prop-types";

export function Summary({ summary }) {
    return <summary dangerouslySetInnerHTML={{ __html: summary }} />;
}

export const summaryPropType = PropTypes.string;

Summary.propTypes = {
    summary: summaryPropType,
}
