import axios from "axios";
import { SHOWS_RESOURCE_PATH } from "./constants";

import { ShowsService } from "./ShowsService";

jest.mock("axios");

const showId = 6771;

let service;

beforeEach(() => {
    axios.mockReset();
    service = new ShowsService(axios);
});

describe("getShowMainInformation", () => {
    beforeEach(async () => {
        await service.getShowMainInformation(showId);
    });

    it(`should call api with page="0" in query params`, () => {
        expect(axios.get).toHaveBeenLastCalledWith(`${SHOWS_RESOURCE_PATH}/${showId}`);
    });
});

describe("getShowEpisodeList", () => {
    beforeEach(async () => {
        await service.getShowEpisodeList(showId);
    });

    it(`should call api with page="0" in query params`, () => {
        expect(axios.get).toHaveBeenCalledWith(`${SHOWS_RESOURCE_PATH}/${showId}/episodes`);
    });
});
