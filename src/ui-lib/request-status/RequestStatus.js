import PropTypes from "prop-types";
import { CircularProgress } from "@material-ui/core";
import ErrorIcon from '@material-ui/icons/Error';

export const REQUEST_STATUS_IDLE = "idle";
export const REQUEST_STATUS_PENDING = "pending";
export const REQUEST_STATUS_FULFILLED = "fulfilled";
export const REQUEST_STATUS_REJECTED = "rejected";

/**
 * Renders progress bar when "requestStatus" is "idle" or "pending"
 * Renders caution symbol when "requestStatus" is "rejected"
 * Uses "render prop" pattern to render children when "request status" is "fulfilled"
 */
export function RequestStatus({ children, requestStatus = REQUEST_STATUS_IDLE }) {
    if (requestStatus === REQUEST_STATUS_IDLE || requestStatus === REQUEST_STATUS_PENDING) {
        return <CircularProgress  />;
    }

    if (requestStatus === REQUEST_STATUS_REJECTED) {
        return <ErrorIcon />;
    }

    return children();
}

export const requestStatusPropType = PropTypes.oneOf([
    REQUEST_STATUS_IDLE,
    REQUEST_STATUS_PENDING,
    REQUEST_STATUS_FULFILLED,
    REQUEST_STATUS_REJECTED
]);

RequestStatus.propTypes = {
    children: PropTypes.func.isRequired,
    requestStatus: requestStatusPropType,
};
