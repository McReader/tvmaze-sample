import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import { episodesSelectors, fetchEpisodeMainInformation } from "../store"

import { EpisodeDetails } from "../../../episodes/episode-details/EpisodeDetails"
import { episodeDetailsPageSelectors } from "./store"

export default function EpisodeDetailsContainer() {
	const dispatch = useDispatch()
	const { episodeId, showId } = useParams()

	const { episode, requestStatus } = useSelector((state) => ({
		episode: episodesSelectors.selectById(state, episodeId),
		requestStatus: episodeDetailsPageSelectors.selectEpisodesDetailsRequestStatus(
			state
		),
	}))

	useEffect(() => {
		const episodeMainInformationPromise = dispatch(
			fetchEpisodeMainInformation({ episodeId, showId })
		)

		return () => {
			episodeMainInformationPromise.abort()
		}
	}, [episode, episodeId, dispatch, showId])

	return <EpisodeDetails episode={episode} requestStatus={requestStatus} />
}
