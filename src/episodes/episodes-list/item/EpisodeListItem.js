import { Link } from "react-router-dom"

import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"

import { Image } from "../../../ui-lib/image/Image"

export function EpisodeListItem({ episode, currentUrl }) {
	return (
		<GridListTile key={episode.id}>
			<Link to={`${currentUrl}/episodes/${episode.id}`}>
				<Image
					src={episode.image?.medium}
					alt={episode.name}
					placeholderWidth={250}
					placeholderHeight={140}
				/>
				<GridListTileBar
					title={episode.name}
					subtitle={`S${episode.season}E${episode.number}`}
				/>
			</Link>
		</GridListTile>
	)
}
