import { createSlice } from "@reduxjs/toolkit";

import { fetchShowEpisodeList } from "../../episodes/store";

import { fetchShowMainInfo } from "../store";

const PREFIX = "showDetailsPage";

const initialState = {
    showInfoRequestStatus: "idle",
    episodesRequestStatus: "idle",
};

const updateShowInfoRequestStatus = (state, action) => {
    state.showInfoRequestStatus = action.meta.requestStatus;
};

const updateEpisodesRequestStatus = (state, action) => {
    state.episodesRequestStatus = action.meta.requestStatus;
};

export const showsDetailsPageSlice = createSlice({
    name: PREFIX,
    initialState: initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: {
        [fetchShowMainInfo.pending]: updateShowInfoRequestStatus,
        [fetchShowMainInfo.fulfilled]: updateShowInfoRequestStatus,
        [fetchShowMainInfo.rejected]: updateShowInfoRequestStatus,
        [fetchShowEpisodeList.pending]: updateEpisodesRequestStatus,
        [fetchShowEpisodeList.fulfilled]: updateEpisodesRequestStatus,
        [fetchShowEpisodeList.rejected]: updateEpisodesRequestStatus,
    }
});

export const showDetailsPageSelectors = {
    getEpisodesRequestStatus: (state) => state.showDetailsPage.episodesRequestStatus,
    getShowInfoRequestStatus: (state) => state.showDetailsPage.showInfoRequestStatus,
};
