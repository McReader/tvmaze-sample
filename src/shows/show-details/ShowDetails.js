import PropTypes from "prop-types";

import { coverImagePropType } from "../../ui-lib/details/cover-image/CoverImage";

import { requestStatusPropType } from "../../ui-lib/request-status/RequestStatus";
import { Details } from "../../ui-lib/details/Details";

import "./ShowDetails.css";

export function ShowDetails({ episodesListElement, show, requestStatus }) {
    return (
        <div className="ShowDetails">
            <Details requestStatus={requestStatus} details={show} />
            <h2>Episodes</h2>
            { episodesListElement }
        </div>
    );
}

ShowDetails.propTypes = {
    show: PropTypes.shape({
        image: coverImagePropType,
        name: PropTypes.string.isRequired,
        summary: PropTypes.string,
    }),
    episodesListElement: PropTypes.element.isRequired,
    requestStatus: requestStatusPropType,
};
