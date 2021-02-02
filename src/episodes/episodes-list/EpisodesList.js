import GridList from '@material-ui/core/GridList';

import { RequestStatus } from "../../ui-lib/request-status/RequestStatus";

import { EpisodeListItem } from "./item/EpisodeListItem";

import "./EpisodesList.css";

export function EpisodesList({ currentUrl = "", episodes = [], requestStatus }) {
    return (
        <div className="EpisodesList">
            <RequestStatus requestStatus={requestStatus}>
                {() => (
                    <GridList className="EpisodesListGrid" spacing={1}>
                        {episodes.map(episode => (
                            <EpisodeListItem
                                currentUrl={currentUrl}
                                episode={episode}
                                key={episode.id}
                            />
                        ))}
                    </GridList>
                )}
            </RequestStatus>
        </div>
    );
}
