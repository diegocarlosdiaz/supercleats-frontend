import { createHttpAsyncThunk } from "@/service/ReduxThunkService";
import { createSlice, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";


const url = '/botines';

export const getBotines = createHttpAsyncThunk('botines/getBotines', 'get', url)
const BotinesSlice = createSlice({
    name: 'botines',
    initialState: {
        entities: [],
        headers: null,
        isLoading: false,
        error: null as string | null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(isPending(getBotines), (state) => {
                state.entities = [];
                state.isLoading = true;
                state.error = null;
                state.headers = null;
            })
            .addMatcher(isFulfilled(getBotines), (state, action) => {
                state.isLoading = false;
                state.entities = action.payload?.data;
                state.headers = action.payload?.length;
                state.error = null;
            })
            .addMatcher(isRejected(getBotines), (state, action) => {
                state.isLoading = false;
                state.error = action.error.message ?? "Unknown error";
                state.entities = [];
            })
    }
})

export default BotinesSlice.reducer;