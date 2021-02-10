import GridListTileBar from "@material-ui/core/GridListTileBar"

import { Image } from "../../../ui-lib/image/Image"

export function EpisodeListItem({ episode }) {
	return (
		<>
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
		</>
	)
}
