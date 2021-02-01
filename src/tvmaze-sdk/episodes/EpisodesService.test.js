import axios from "axios";

import { EPISODES_RESOURCE_PATH } from "./constants";
import { EpisodesService } from "./EpisodesService";

jest.mock("axios");

const episodeId = 58839;

let service;

beforeEach(() => {
    axios.mockReset();
    service = new EpisodesService(axios);
});

describe("getEpisodeMainInformation", () => {
    beforeEach(async () => {
        await service.getEpisodeMainInformation(episodeId);
    });

    it(`should call api with appropriate path`, () => {
        expect(axios.get).toHaveBeenLastCalledWith(`${EPISODES_RESOURCE_PATH}/${episodeId}`);
    });
});
