import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { episodesSelectors, fetchEpisodeMainInformation } from "../store";

import { EpisodeDetails } from "./EpisodeDetails";

export function EpisodeDetailsContainer() {
    const dispatch = useDispatch();
    const { episodeId, showId } = useParams();
    const episode = useSelector(state => episodesSelectors.selectById(state, episodeId));

    useEffect(() => {
        if (!episode) {
            dispatch(fetchEpisodeMainInformation({ episodeId, showId }));
        }
    }, [episode, episodeId, dispatch, showId]);

    if (!episode) {
        return null;
    }

    return <EpisodeDetails episode={episode} />;
}
