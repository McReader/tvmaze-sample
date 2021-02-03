import PropTypes from "prop-types"
import { Route, Switch, useRouteMatch } from "react-router-dom"

export function ShowDetailsPage({ episodeDetailsElement, showDetailsElement }) {
	const { path } = useRouteMatch()

	return (
		<Switch>
			<Route path={`${path}/episodes/:episodeId`}>
				{episodeDetailsElement}
			</Route>
			<Route path={path}>{showDetailsElement}</Route>
		</Switch>
	)
}

ShowDetailsPage.propTypes = {
	showDetailsElement: PropTypes.element.isRequired,
	episodeDetailsElement: PropTypes.element.isRequired,
}
