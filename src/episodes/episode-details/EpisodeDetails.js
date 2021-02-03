import { Details, detailsPropTypes } from "../../ui-lib/details/Details"
import { requestStatusPropType } from "../../ui-lib/request-status/RequestStatus"

export function EpisodeDetails({ episode, requestStatus }) {
	return <Details details={episode} requestStatus={requestStatus} />
}

EpisodeDetails.propTypes = {
	episode: detailsPropTypes,
	requestStatus: requestStatusPropType,
}
