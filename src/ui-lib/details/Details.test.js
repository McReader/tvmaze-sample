import renderer from "react-test-renderer"

import { Details } from "./Details"

import show from "../../tvmaze-sdk/shows/showMainInformationSample.json"

import { REQUEST_STATUS_FULFILLED } from "../request-status/RequestStatus"

let tree
let props

beforeEach(() => {
	tree = renderer.create(<Details {...props} />).toJSON()
})

describe(`when request status is "${REQUEST_STATUS_FULFILLED}" and there is a show`, () => {
	beforeAll(() => {
		props = {
			requestStatus: REQUEST_STATUS_FULFILLED,
			details: show,
		}
	})

	test("should match snapshot", () => {
		expect(tree).toMatchSnapshot()
	})
})
