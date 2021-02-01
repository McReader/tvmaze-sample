import { EpisodeListItem } from "./item/EpisodeListItem";

export function EpisodesList({ episodes }) {
    return (
        <ul>
            { episodes.map(episode => <EpisodeListItem key={episode.id} episode={episode} />) }
        </ul>
    );
}
