import { SHOWS_RESOURCE_PATH } from "./constants";

/**
 * @typedef {Object} Show
 * @property {id} id
 * @property {string} name
 * @property {string} summary
 * @property {string} url
 */

export class ShowsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    /**
     * Get a list of all shows, with all primary information included.
     * @param {number} showId Show unique identifier
     * @return {Promise<Show>}
     */
    getShowMainInformation(showId) {
        return this.httpClient.get(`${SHOWS_RESOURCE_PATH}/${showId}`);
    }

    /**
     * @param {number} showId Show unique identifier
     * @return {Promise<Episode[]>}
     */
    getShowEpisodeList(showId) {
        return this.httpClient.get(`${SHOWS_RESOURCE_PATH}/${showId}/episodes`);
    }
}