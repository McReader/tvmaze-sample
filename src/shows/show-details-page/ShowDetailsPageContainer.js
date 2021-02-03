import { ShowDetailsPage } from "./ShowDetailsPage"

import { EpisodeDetailsContainer } from "../../episodes/episode-details/EpisodeDetailsContainer"
import { ShowDetailsContainer } from "../show-details/ShowDetailsContailer"

export function ShowDetailsPageContainer() {
	return (
		<ShowDetailsPage
			episodeDetailsElement={<EpisodeDetailsContainer />}
			showDetailsElement={<ShowDetailsContainer />}
		/>
	)
}
