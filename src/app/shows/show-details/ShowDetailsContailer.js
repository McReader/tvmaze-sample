import { memo, useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import { fetchShowEpisodeList } from "../../episodes/store"
import { fetchShowMainInfo, showsSelectors } from "../store"

import { ShowDetails } from "../../../shows/show-details/ShowDetails"
import { EpisodesListContainer } from "./episodes-list/EpisodesListContainer"
import { showDetailsPageSelectors } from "./store"

const EnhancedShowDetails = memo(ShowDetails)

export default function ShowDetailsContainer() {
	const dispatch = useDispatch()
	const { showId } = useParams()
	const episodesListContainer = useMemo(() => <EpisodesListContainer />, [])

	useEffect(() => {
		const showsMainInfoPromise = dispatch(fetchShowMainInfo(showId))
		/**
		 * Prefetch episodes list
		 */
		const showEpisodesListPromise = dispatch(fetchShowEpisodeList(showId))

		return () => {
			showsMainInfoPromise.abort()
			showEpisodesListPromise.abort()
		}
	}, [dispatch, showId])

	const { show, showDetailsRequestStatus } = useSelector((state) => ({
		show: showsSelectors.selectById(state, showId),
		showDetailsRequestStatus: showDetailsPageSelectors.getShowInfoRequestStatus(
			state
		),
	}))

	return (
		<EnhancedShowDetails
			episodesListElement={episodesListContainer}
			show={show}
			requestStatus={showDetailsRequestStatus}
		/>
	)
}
