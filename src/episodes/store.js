import { createEntityAdapter, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const PREFIX = "episodes";

export const fetchShowEpisodeList = createAsyncThunk(`${PREFIX}/fetchShowEpisodeList`, async (showId, thunkAPI) => {
    const result = await thunkAPI.extra.showsService.getShowEpisodeList(showId);
    return result.data;
});

export const fetchEpisodeMainInformation = createAsyncThunk(`${PREFIX}/fetchEpisodeMainInformation`, async ({ showId, episodeId }, thunkAPI) => {
    const episode = episodesSelectors.selectById(thunkAPI.getState(), episodeId);

    if (episode) {
        return Promise.resolve(episode);
    }

    const result = await thunkAPI.extra.episodesService.getEpisodeMainInformation(episodeId);
    return result.data;
});

const episodesAdapter = createEntityAdapter();

export const initialState = {
    ...episodesAdapter.getInitialState(),
    byShow: {},
};

export const episodesSlice = createSlice({
    name: PREFIX,
    initialState: initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: {
        [fetchShowEpisodeList.fulfilled]: (state, { meta, payload }) => {
            episodesAdapter.addMany(state, payload);
            state.byShow[meta.arg] = payload.map(episode => episode.id);
        },
        [fetchEpisodeMainInformation.fulfilled]: (state, { meta, payload }) => {
            episodesAdapter.addOne(state, payload);
            state.byShow[meta.arg.showId] = [payload.id];
        },
    }
});

export const episodesSelectors = {
    ...episodesAdapter.getSelectors((state) => state.episodes),
    selectByShowId: (state) => {  },
};
