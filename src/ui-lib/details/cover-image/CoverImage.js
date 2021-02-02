import PropTypes from "prop-types";

import { Image } from "../../Image";

import "./CoverImage.css";

export function CoverImage({ className, image }) {
    return (
        <picture className={className}>
            <source media="(max-width:600px)" srcSet={image?.original} />
            <source media="(max-width:900px)" srcSet={image?.medium} />
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
});

CoverImage.propTypes = {
    className: PropTypes.string,
    image: coverImagePropType,
};
