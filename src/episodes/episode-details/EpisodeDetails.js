import { CoverImage } from "../../ui-lib/cover-image/CoverImage";
import { Summary } from "../../ui-lib/Summary";
import { RequestStatus } from "../../ui-lib/RequestStatus";

export function EpisodeDetails({ episode, requestStatus }) {
    return (
        <div>
            <RequestStatus requestStatus={requestStatus}>
                {() => {
                    return (
                        <>
                            <h1>{ episode.name }</h1>
                            <CoverImage image={episode.image} />
                            <Summary summary={episode.summary} />
                        </>
                    );
                }}
            </RequestStatus>
        </div>
    );
}
