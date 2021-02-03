import { StylesProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

import {
	BrowserRouter as Router,
	Switch,
	Redirect,
	Route,
} from "react-router-dom"

import PropTypes from "prop-types"

export function App({ showDetailsElement }) {
	return (
		<Router>
			<StylesProvider injectFirst>
				<CssBaseline />
				<Switch>
					<Route path="/shows/:showId">{showDetailsElement}</Route>
					<Route path="/" exact>
						<Redirect to="/shows/6771" />
					</Route>
				</Switch>
			</StylesProvider>
		</Router>
	)
}

App.propTypes = {
	showDetailsElement: PropTypes.element.isRequired,
}
