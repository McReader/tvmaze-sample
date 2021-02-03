import PropTypes from "prop-types"

export function Image({
	alt,
	src,
	placeholderWidth = 140,
	placeholderHeight,
	...props
}) {
	let placeholderSrc

	if (!src) {
		const placeholderSize = [placeholderWidth]

		if (placeholderHeight) {
			placeholderSize.push(placeholderHeight)
		}

		placeholderSrc = `https://via.placeholder.com/${placeholderSize.join(
			"x"
		)}?text=No image`
	}

	return <img {...props} alt={alt} src={src || placeholderSrc} />
}

Image.propTypes = {
	alt: PropTypes.string,
	src: PropTypes.string,
	placeholderHeight: PropTypes.number,
	placeholderWidth: PropTypes.number,
}
