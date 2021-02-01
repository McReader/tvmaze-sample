import { combineReducers } from '@reduxjs/toolkit';

import { showsSlice } from "../shows/store";
import { episodesSlice } from "../episodes/store";

export const rootReducer = combineReducers({
    episodes: episodesSlice.reducer,
    shows: showsSlice.reducer,
});
