import renderer from "react-test-renderer";

import { Image } from "./Image";

let tree;
let props;

beforeEach(() => {
    tree = renderer
        .create(<Image {...props} />)
        .toJSON();
});

describe(`when "src" prop is provided`, () => {
    beforeAll(() => {
        props = {
            src: "https://example.com",
        };
    });

    test(`should render image with provided "src"`, () => {
        expect(tree).toMatchSnapshot();
    });
});

describe(`when "src" prop is not provided`, () => {
    beforeAll(() => {
        props = {};
    });

    test(`should render image placeholder with default size`, () => {
        expect(tree).toMatchSnapshot();
    });

    describe(`and "placeholderWidth" is provided"`, () => {
        beforeAll(() => {
            props = {
                placeholderWidth: 200,
            };
        });

        test(`should render square image placeholder with provided size`, () => {
            expect(tree).toMatchSnapshot();
        });
    });

    describe(`and "placeholderWidth" and "placeholderHeight" are provided"`, () => {
        beforeAll(() => {
            props = {
                placeholderWidth: 200,
                placeholderHeight: 140,
            };
        });

        test(`should render image placeholder with provided width and height`, () => {
            expect(tree).toMatchSnapshot();
        });
    });
});
