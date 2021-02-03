import axios from "axios"
import { setupCache } from "axios-cache-adapter"

import {
	BASE_URL,
	DEFAULT_HEADERS,
	ShowsService,
	EpisodesService,
} from "../tvmaze-sdk"

const cache = setupCache({
	maxAge: 15 * 60 * 1000,
})

const httpClient = axios.create({
	adapter: cache.adapter,
	baseURL: BASE_URL,
	timeout: 30000,
	headers: DEFAULT_HEADERS,
})

const showsService = new ShowsService(httpClient)
const episodesService = new EpisodesService(httpClient)

export const appContext = { episodesService, showsService }
