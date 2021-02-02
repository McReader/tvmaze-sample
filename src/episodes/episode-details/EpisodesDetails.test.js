import renderer from "react-test-renderer";

import { EpisodeDetails } from "./EpisodeDetails";

import episodes from "../../tvmaze-sdk/episodes/__mocks__/episodes.json";

import { REQUEST_STATUS_FULFILLED } from "../../ui-lib/request-status/RequestStatus";

let tree;
let props;

beforeEach(() => {
    tree = renderer
        .create(<EpisodeDetails {...props} />)
        .toJSON();
});

describe(`when request status is "${REQUEST_STATUS_FULFILLED}" and there is episode`, () => {
    beforeAll(() => {
        props = {
            requestStatus: REQUEST_STATUS_FULFILLED,
            episode: episodes[0],
        };
    });

    test("should match snapshot", () => {
        expect(tree).toMatchSnapshot();
    });
});

