import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchShowEpisodeList, episodesSelectors } from "../../episodes/store";

import { fetchShowMainInfo, showsSelectors } from "../store";

import { ShowDetails } from "./ShowDetails";

export function ShowDetailsContainer() {
    const dispatch = useDispatch();
    const { showId } = useParams();

    useEffect(() => {
        dispatch(fetchShowMainInfo(showId));
        dispatch(fetchShowEpisodeList(showId));
    }, [dispatch, showId]);

    const show = useSelector(state => showsSelectors.selectById(state, showId.toString()));
    const episodes = useSelector(state => episodesSelectors.selectAll(state));

    if (!show) {
        return null;
    }

    return <ShowDetails show={show} episodes={episodes} />;
}
