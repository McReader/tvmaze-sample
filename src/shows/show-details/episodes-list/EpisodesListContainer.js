import { useSelector } from "react-redux";

import { EpisodesList } from "../../../episodes/episodes-list/EpisodesList";
import { episodesSelectors } from "../../../episodes/store";

import { showDetailsPageSelectors } from "../store";

export function EpisodesListContainer() {
    const { episodes, episodesRequestStatus } = useSelector(state => ({
        episodes: episodesSelectors.selectAll(state),
        episodesRequestStatus: showDetailsPageSelectors.getEpisodesRequestStatus(state),
    }));

    return <EpisodesList episodes={episodes} requestStatus={episodesRequestStatus} />;
}
