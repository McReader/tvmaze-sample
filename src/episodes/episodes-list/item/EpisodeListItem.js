import { Link, useRouteMatch } from "react-router-dom";

export function EpisodeListItem({ episode }) {
    const { url } = useRouteMatch();

    return (
        <li>
            <Link to={`${url}/episodes/${episode.id}`}>
                {episode.name}
            </Link>
        </li>
    );
}
