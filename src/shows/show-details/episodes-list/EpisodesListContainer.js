import { memo } from "react";
import { useSelector } from "react-redux";

import { EpisodesList } from "../../../episodes/episodes-list/EpisodesList";
import { episodesSelectors } from "../../../episodes/store";

import { showDetailsPageSelectors } from "../store";

const EnhancedEpisodesList = memo(EpisodesList);

export function EpisodesListContainer() {
    const { episodes, episodesRequestStatus } = useSelector(state => ({
        episodes: episodesSelectors.selectAll(state),
        episodesRequestStatus: showDetailsPageSelectors.getEpisodesRequestStatus(state),
    }));

    return <EnhancedEpisodesList episodes={episodes} requestStatus={episodesRequestStatus} />;
}
