import { memo, useCallback } from "react"
import { useSelector } from "react-redux"
import { Link, useRouteMatch } from "react-router-dom"

import { EpisodesList } from "../../../../episodes/episodes-list/EpisodesList"
import { EpisodeListItem } from "../../../../episodes/episodes-list/item/EpisodeListItem"
import { episodesSelectors } from "../../../episodes/store"

import { showDetailsPageSelectors } from "../store"

const EnhancedEpisodesList = memo(EpisodesList)

export function EpisodesListContainer() {
	const { url } = useRouteMatch()

	const itemRenderer = useCallback(
		(episode) => (
			<Link to={`${url}/episodes/${episode.id}`}>
				<EpisodeListItem episode={episode} />
			</Link>
		),
		[url]
	)

	const { episodes, episodesRequestStatus } = useSelector((state) => ({
		episodes: episodesSelectors.selectAll(state),
		episodesRequestStatus: showDetailsPageSelectors.getEpisodesRequestStatus(
			state
		),
	}))

	return (
		<EnhancedEpisodesList
			episodes={episodes}
			itemRenderer={itemRenderer}
			requestStatus={episodesRequestStatus}
		/>
	)
}
