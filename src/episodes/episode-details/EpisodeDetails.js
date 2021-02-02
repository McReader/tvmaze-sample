import { Details } from "../../ui-lib/details/Details";

export function EpisodeDetails({ episode, requestStatus }) {
    return <Details details={episode} requestStatus={requestStatus} />;
}
