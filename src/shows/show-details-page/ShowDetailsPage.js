import { lazy } from "react"
import { Route, Switch, useRouteMatch } from "react-router-dom"

const LazyEpisodeDetailsContainer = lazy(() =>
	import("../../episodes/episode-details/EpisodeDetailsContainer")
)

const LazyShowDetailsContainer = lazy(() =>
	import("../show-details/ShowDetailsContailer")
)

export function ShowDetailsPage() {
	const { path } = useRouteMatch()

	return (
		<Switch>
			<Route
				path={`${path}/episodes/:episodeId`}
				component={LazyEpisodeDetailsContainer}
			/>
			<Route path={path} component={LazyShowDetailsContainer} />
		</Switch>
	)
}
