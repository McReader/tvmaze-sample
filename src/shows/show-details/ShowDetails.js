import PropTypes from "prop-types";

import { CoverImage, coverImagePropType } from "../../ui-lib/cover-image/CoverImage";
import { Summary, summaryPropType } from "../../ui-lib/Summary";

import { RequestStatus, requestStatusPropType } from "../../ui-lib/RequestStatus";

import "./ShowDetails.css";

export function ShowDetails({ episodesListElement, show, requestStatus }) {
    return (
        <div className="ShowDetails">
            <RequestStatus requestStatus={requestStatus}>
                {() => {
                    const { image, name, summary } = show;

                    return (
                        <>
                            <h1>{name}</h1>
                            <div className="ShowDetailsSummaryContainer">
                                <CoverImage image={image} />
                                <Summary summary={summary} />
                            </div>
                            <h2>Episodes</h2>
                            { episodesListElement }
                        </>
                    );
                }}
            </RequestStatus>
        </div>
    );
}

ShowDetails.propTypes = {
    show: PropTypes.shape({
        image: coverImagePropType,
        name: PropTypes.string.isRequired,
        summary: summaryPropType,
    }),
    episodesListElement: PropTypes.element.isRequired,
    requestStatus: requestStatusPropType,
};
