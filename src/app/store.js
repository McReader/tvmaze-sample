import { configureStore } from "@reduxjs/toolkit"

import { rootReducer } from "./rootReducer"
import { appContext } from "./appContext"

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: appContext,
			},
		}),
})

if (process.env.NODE_ENV === "development" && module.hot) {
	module.hot.accept("./rootReducer", () => {
		const newRootReducer = require("./rootReducer").default
		store.replaceReducer(newRootReducer)
	})
}
