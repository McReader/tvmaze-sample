import { CoverImage } from "../../ui-lib/CoverImage";
import { Summary } from "../../ui-lib/Summary";

export function EpisodeDetails({ episode }) {
    return (
        <div>
            <h1>{ episode.name }</h1>
            <CoverImage image={episode.image} />
            <Summary summary={episode.summary} />
        </div>
    );
}
