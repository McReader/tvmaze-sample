import PropTypes from "prop-types";

import { CoverImage, coverImagePropType } from "../../ui-lib/CoverImage";
import { Summary, summaryPropType } from "../../ui-lib/Summary";

import { RequestStatus, requestStatusPropType } from "../../ui-lib/RequestStatus";

export function ShowDetails({ episodesListElement, show, requestStatus }) {
    return (
        <div>
            <RequestStatus requestStatus={requestStatus}>
                {() => {
                    const { image, name, summary } = show;

                    return (
                        <>
                            <h1>{name}</h1>
                            <CoverImage image={image} />
                            <Summary summary={summary} />
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
