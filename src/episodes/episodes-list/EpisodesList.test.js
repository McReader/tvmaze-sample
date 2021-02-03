import renderer from "react-test-renderer"
import { MemoryRouter } from "react-router-dom"

import { EpisodesList } from "./EpisodesList"

import episodes from "../../tvmaze-sdk/episodes/episodesSample.json"

import { REQUEST_STATUS_FULFILLED } from "../../ui-lib/request-status/RequestStatus"

let tree
let props

beforeEach(() => {
	tree = renderer
		.create(
			<MemoryRouter>
				<EpisodesList {...props} />
			</MemoryRouter>
		)
		.toJSON()
})

describe(`when request status is "${REQUEST_STATUS_FULFILLED}" and there are episodes in list`, () => {
	beforeAll(() => {
		props = {
			requestStatus: REQUEST_STATUS_FULFILLED,
			episodes,
		}
	})

	test("should match snapshot", () => {
		expect(tree).toMatchSnapshot()
	})
})
