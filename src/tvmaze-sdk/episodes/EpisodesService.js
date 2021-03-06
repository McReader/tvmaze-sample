import { EPISODES_RESOURCE_PATH } from "./constants"

/**
 * @typedef {Object} Episode
 * @property {number} id
 * @property {string} name
 */

export class EpisodesService {
	constructor(httpClient) {
		this.httpClient = httpClient
	}

	/**
	 * Retrieve all primary information for a given episode.
	 * @param {number} episodeId
	 * @return {Promise<Episode>}
	 */
	getEpisodeMainInformation(episodeId) {
		return this.httpClient.get(`${EPISODES_RESOURCE_PATH}/${episodeId}`)
	}
}
