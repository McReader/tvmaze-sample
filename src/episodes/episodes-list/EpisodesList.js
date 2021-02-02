import GridList from '@material-ui/core/GridList';

import { RequestStatus } from "../../ui-lib/request-status/RequestStatus";

import { EpisodeListItem } from "./item/EpisodeListItem";

import "./EpisodesList.css";

export function EpisodesList({ episodes, requestStatus }) {
    return (
        <div className="EpisodesList">
            <RequestStatus requestStatus={requestStatus}>
                {() => (
                    <GridList className="EpisodesListGrid">
                        {episodes.map(episode => <EpisodeListItem key={episode.id} episode={episode} />)}
                    </GridList>
                )}
            </RequestStatus>
        </div>
    );
}
