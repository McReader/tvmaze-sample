import PropTypes from "prop-types";

export function Summary({ className, summary }) {
    return <summary className={className} dangerouslySetInnerHTML={{ __html: summary }} />;
}

export const summaryPropType = PropTypes.string;

Summary.propTypes = {
    className: PropTypes.string,
    summary: summaryPropType,
}
