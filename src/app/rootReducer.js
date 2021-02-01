import { combineReducers } from '@reduxjs/toolkit';

import { showsSlice } from "../shows/store";
import { showsDetailsPageSlice } from "../shows/show-details/store";
import { episodesSlice } from "../episodes/store";
import { episodeDetailsPageSlice } from "../episodes/episode-details/store";

export const rootReducer = combineReducers({
    episodeDetailsPage: episodeDetailsPageSlice.reducer,
    episodes: episodesSlice.reducer,
    shows: showsSlice.reducer,
    showDetailsPage: showsDetailsPageSlice.reducer,
});
