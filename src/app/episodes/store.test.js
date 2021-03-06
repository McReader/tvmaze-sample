import episodes from "../../tvmaze-sdk/episodes/episodesSample.json"

import { fetchShowEpisodeList, initialState, episodesSlice } from "./store"

let currentState
let nextState
let action
const fakeShowId = 1
const fakeRequestId = "fakeRequestId"

beforeEach(() => {
	nextState = episodesSlice.reducer(currentState, action)
})

describe(`when action is "${fetchShowEpisodeList.fulfilled}"`, () => {
	beforeAll(() => {
		currentState = initialState
		action = fetchShowEpisodeList.fulfilled(
			episodes,
			fakeRequestId,
			fakeShowId
		)
	})

	test("should fill the store by received items", () => {
		expect(nextState).toMatchSnapshot()
	})
})
