import { Link } from "react-router-dom";

import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

export function EpisodeListItem({ episode, currentUrl }) {
    return (
        <Link to={`${currentUrl}/episodes/${episode.id}`}>
            <GridListTile key={episode.id}>
                <img src={episode.image?.medium} alt={episode.name} />
                <GridListTileBar
                    title={episode.name}
                    subtitle={`S${episode.season}E${episode.number}`}
                />
            </GridListTile>
        </Link>
    );
}
