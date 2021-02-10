import { useLayoutEffect, useRef, useState } from "react"

import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"

import { debounce } from "debounce"

import { RequestStatus } from "../../ui-lib/request-status/RequestStatus"

import { EpisodeListItem } from "./item/EpisodeListItem"

import "./EpisodesList.scss"

export function EpisodesList({
	episodes = [],
	itemRenderer = (episode) => <EpisodeListItem episode={episode} />,
	requestStatus,
}) {
	const containerRef = useRef()
	const [cols, setCols] = useState(1)

	useLayoutEffect(() => {
		const onResize = debounce(() => {
			setCols(containerRef.current.clientWidth / 250)
		}, 200)

		onResize()

		window.addEventListener("resize", onResize)

		return () => {
			onResize.clear()
			window.removeEventListener("resize", onResize)
		}
	}, [])

	return (
		<div className="EpisodesList" ref={containerRef}>
			<RequestStatus requestStatus={requestStatus}>
				{() => (
					<GridList
						className="EpisodesListGrid"
						cellHeight={140}
						cols={cols}
					>
						{episodes.map((episode) => (
							<GridListTile key={episode.id}>
								{itemRenderer(episode)}
							</GridListTile>
						))}
					</GridList>
				)}
			</RequestStatus>
		</div>
	)
}
