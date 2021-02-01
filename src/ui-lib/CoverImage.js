import PropTypes from "prop-types";

export function CoverImage({ image }) {
    return (
        <picture>
            <source media="(min-width:650px)" srcSet={image.original} />
            <source media="(min-width:465px)" srcSet={image.medium} />
            <img src={image.original} alt="Cover" style={{ maxWidth: "100%" }} />
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
