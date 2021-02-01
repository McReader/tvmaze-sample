import { RequestStatus } from "../../ui-lib/RequestStatus";

import { EpisodeListItem } from "./item/EpisodeListItem";

export function EpisodesList({ episodes, requestStatus }) {
    return (
        <ul>
            <RequestStatus requestStatus={requestStatus}>
                {() => episodes.map(episode => <EpisodeListItem key={episode.id} episode={episode} />)}
            </RequestStatus>
        </ul>
    );
}
