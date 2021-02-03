import renderer from "react-test-renderer"

import { ShowDetails } from "./ShowDetails"

import show from "../../tvmaze-sdk/shows/showMainInformationSample.json"

import { REQUEST_STATUS_FULFILLED } from "../../ui-lib/request-status/RequestStatus"

let tree
let props

beforeEach(() => {
	tree = renderer.create(<ShowDetails {...props} />).toJSON()
})

describe(`when request status is "${REQUEST_STATUS_FULFILLED}" and there is a show`, () => {
	beforeAll(() => {
		props = {
			episodesListElement: <div />,
			requestStatus: REQUEST_STATUS_FULFILLED,
			show,
		}
	})

	test("should match snapshot", () => {
		expect(tree).toMatchSnapshot()
	})
})
