import PropTypes from "prop-types"

import {
	BreakpointMobile,
	BreakpointTablet,
} from "../../../design-tokens/variables"

import { Image } from "../../image/Image"

import "./CoverImage.scss"

export function CoverImage({ className, image }) {
	return (
		<picture className={className}>
			<source
				media={`(max-width:${BreakpointMobile}`}
				srcSet={image?.original}
			/>
			<source
				media={`(max-width:${BreakpointTablet})`}
				srcSet={image?.medium}
			/>
			<Image
				alt="Cover"
				className="CoverImageImg"
				placeholderHeight={600}
				placeholderWidth={500}
				src={image?.original}
			/>
		</picture>
	)
}

export const coverImagePropType = PropTypes.shape({
	medium: PropTypes.string,
	original: PropTypes.string,
})

CoverImage.propTypes = {
	className: PropTypes.string,
	image: coverImagePropType,
}
