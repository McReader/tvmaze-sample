import PropTypes from "prop-types";

import { CoverImage, coverImagePropType } from "../../ui-lib/CoverImage";
import { EpisodesList } from "../../episodes/episodes-list/EpisodesList";
import { Summary, summaryPropType } from "../../ui-lib/Summary";

export function ShowDetails({ show, episodes }) {
    const { image, name, summary } = show;

    return (
        <div>
            <h1>{name}</h1>
            <CoverImage image={image} />
            <Summary summary={summary} />
            { episodes ? <EpisodesList episodes={episodes} /> : null}
        </div>
    );
}

ShowDetails.propTypes = {
    show: PropTypes.shape({
        image: coverImagePropType,
        name: PropTypes.string.isRequired,
        summary: summaryPropType,
    }).isRequired,
};
