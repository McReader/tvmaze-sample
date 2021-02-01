import { createSlice } from "@reduxjs/toolkit";

import { fetchEpisodeMainInformation } from "../store";

const PREFIX = "episodeDetailsPage";

const initialState = {
    requestStatus: "idle",
};

const updateRequestStatus = (state, action) => {
    state.requestStatus = action.meta.requestStatus;
};

export const episodeDetailsPageSlice = createSlice({
    name: PREFIX,
    initialState: initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: {
        [fetchEpisodeMainInformation.pending]: updateRequestStatus,
        [fetchEpisodeMainInformation.fulfilled]: updateRequestStatus,
        [fetchEpisodeMainInformation.rejected]: updateRequestStatus,
    }
});

export const episodeDetailsPageSelectors = {
    selectEpisodesDetailsRequestStatus: (state) => state.episodeDetailsPage.requestStatus,
};
