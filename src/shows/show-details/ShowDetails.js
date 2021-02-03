import PropTypes from "prop-types"

import { requestStatusPropType } from "../../ui-lib/request-status/RequestStatus"
import { Details, detailsPropTypes } from "../../ui-lib/details/Details"

import "./ShowDetails.css"

export function ShowDetails({ episodesListElement, show, requestStatus }) {
	return (
		<Details
			className="ShowDetails"
			requestStatus={requestStatus}
			details={show}
		>
			<h2>Episodes</h2>
			{episodesListElement}
		</Details>
	)
}

ShowDetails.propTypes = {
	show: detailsPropTypes,
	episodesListElement: PropTypes.element.isRequired,
	requestStatus: requestStatusPropType,
}
