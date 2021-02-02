import renderer from "react-test-renderer";

import {
    REQUEST_STATUS_FULFILLED,
    REQUEST_STATUS_IDLE,
    REQUEST_STATUS_PENDING,
    REQUEST_STATUS_REJECTED,
    RequestStatus
} from "./RequestStatus";

let tree;
let props;

beforeEach(() => {
    tree = renderer
        .create(<RequestStatus {...props}>{ () => "Children" }</RequestStatus>)
        .toJSON();
});

describe(`when requestStatus "${REQUEST_STATUS_IDLE}"`, () => {
    beforeAll(() => {
        props = {
            requestStatus: REQUEST_STATUS_IDLE,
        };
    });

    test(`should render progress bar`, () => {
        expect(tree).toMatchSnapshot();
    });
});

describe(`when requestStatus "${REQUEST_STATUS_PENDING}"`, () => {
    beforeAll(() => {
        props = {
            requestStatus: REQUEST_STATUS_PENDING,
        };
    });

    test(`should render progress bar`, () => {
        expect(tree).toMatchSnapshot();
    });

    describe(`when requestStatus "${REQUEST_STATUS_REJECTED}"`, () => {
        beforeAll(() => {
            props = {
                requestStatus: REQUEST_STATUS_REJECTED,
            };
        });

        test(`should render caution symbol`, () => {
            expect(tree).toMatchSnapshot();
        });
    });

    describe(`when requestStatus "${REQUEST_STATUS_FULFILLED}"`, () => {
        beforeAll(() => {
            props = {
                requestStatus: REQUEST_STATUS_FULFILLED,
            };
        });

        test(`should render children`, () => {
            expect(tree).toMatchSnapshot();
        });
    });
});
