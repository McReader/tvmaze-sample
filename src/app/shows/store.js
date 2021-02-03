import {
	createEntityAdapter,
	createAsyncThunk,
	createSlice,
} from "@reduxjs/toolkit"

const PREFIX = "shows"

export const fetchShowMainInfo = createAsyncThunk(
	`${PREFIX}/fetchShowMainInfo`,
	async (showId, thunkAPI) => {
		const result = await thunkAPI.extra.showsService.getShowMainInformation(
			showId
		)
		return result.data
	}
)

const showsAdapter = createEntityAdapter()

export const initialState = showsAdapter.getInitialState()

export const showsSlice = createSlice({
	name: PREFIX,
	initialState,
	reducers: {
		// standard reducer logic, with auto-generated action types per reducer
	},
	extraReducers: {
		[fetchShowMainInfo.fulfilled]: (state, action) => {
			showsAdapter.addOne(state, action.payload)
		},
	},
})

export const showsSelectors = showsAdapter.getSelectors((state) => state.shows)
