import PropTypes from "prop-types";

import { RequestStatus, requestStatusPropType } from "../request-status/RequestStatus";

import { CoverImage, coverImagePropType } from "./cover-image/CoverImage";

import "./Details.css";

export function Details({ requestStatus, details }) {
    return (
        <div className="Details">
            <RequestStatus requestStatus={requestStatus}>
                {() => {
                    const { image, name, summary } = details;

                    return (
                        <>
                            <h1>{name}</h1>
                            <div className="DetailsSummaryContainer">
                                <CoverImage className="DetailsCoverImage" image={image} />
                                <summary
                                    className="DetailsSummary"
                                    dangerouslySetInnerHTML={{ __html: summary }}
                                />
                            </div>
                        </>
                    );
                }}
            </RequestStatus>
        </div>
    );
}

Details.propTypes = {
    details: PropTypes.shape({
        image: coverImagePropType,
        name: PropTypes.string.isRequired,
        summary: PropTypes.string,
    }),
    requestStatus: requestStatusPropType,
};
