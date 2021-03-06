import showDetails from "../../tvmaze-sdk/shows/showMainInformationSample.json"

import { fetchShowMainInfo, initialState, showsSlice } from "./store"

let currentState
let nextState
let action

beforeEach(() => {
	nextState = showsSlice.reducer(currentState, action)
})

describe(`when action is "${fetchShowMainInfo.fulfilled}"`, () => {
	beforeAll(() => {
		currentState = initialState
		action = fetchShowMainInfo.fulfilled(showDetails)
	})

	test("should fill the store by received items", () => {
		expect(nextState).toMatchSnapshot()
	})
})
