import { Suspense } from "react"
import {
	BrowserRouter as Router,
	Switch,
	Redirect,
	Route,
} from "react-router-dom"
import { Provider } from "react-redux"

import { StylesProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

import { ProgressPlaceholder } from "../ui-lib/progress-placeholder/ProgressPlaceholder"

import { ShowDetailsPage } from "../shows/show-details-page/ShowDetailsPage"

import { store } from "./store"

export function App() {
	return (
		<Router>
			<StylesProvider injectFirst>
				<CssBaseline />
				<Provider store={store}>
					<Suspense fallback={<ProgressPlaceholder />}>
						<Switch>
							<Route
								path="/shows/:showId"
								component={ShowDetailsPage}
							/>
							<Route path="/" exact>
								<Redirect to="/shows/6771" />
							</Route>
						</Switch>
					</Suspense>
				</Provider>
			</StylesProvider>
		</Router>
	)
}
