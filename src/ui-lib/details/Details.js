import PropTypes from "prop-types"
import classnames from "classnames"

import {
	RequestStatus,
	requestStatusPropType,
} from "../request-status/RequestStatus"

import { CoverImage, coverImagePropType } from "./cover-image/CoverImage"

import "./Details.css"

export function Details({ children, className, requestStatus, details }) {
	return (
		<div className={classnames("Details", className)}>
			<RequestStatus requestStatus={requestStatus}>
				{() => {
					const { image, name, summary } = details

					return (
						<>
							<h1>{name}</h1>
							<div className="DetailsSummaryContainer">
								<CoverImage
									className="DetailsCoverImage"
									image={image}
								/>
								<summary
									className="DetailsSummary"
									dangerouslySetInnerHTML={{
										__html: summary,
									}}
								/>
							</div>
							{children}
						</>
					)
				}}
			</RequestStatus>
		</div>
	)
}

export const detailsPropTypes = PropTypes.shape({
	image: coverImagePropType,
	name: PropTypes.string.isRequired,
	summary: PropTypes.string,
})

Details.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	details: detailsPropTypes,
	requestStatus: requestStatusPropType,
}
