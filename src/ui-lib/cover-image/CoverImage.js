import PropTypes from "prop-types";

import "./CoverImage.css";

export function CoverImage({ image }) {
    return (
        <picture>
            <source media="(max-width:600px)" srcSet={image.original} />
            <source media="(man-width:900px)" srcSet={image.medium} />
            <img className="CoverImageImg" src={image.original} alt="Cover" />
        </picture>
    )
}

export const coverImagePropType = PropTypes.shape({
    medium: PropTypes.string,
    original: PropTypes.string,
});

CoverImage.propTypes = {
    image: coverImagePropType.isRequired,
};
