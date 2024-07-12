import { createHttpAsyncThunk } from "@/service/ReduxThunkService";
import { createSlice, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";


const url = '/talles';

export const getTalles = createHttpAsyncThunk('talles/getTalles', 'get', `${url}-men`)

const TallesSlice = createSlice({
    name: 'marcas',
    initialState: {
        entities: [],
        headers: null,
        isLoading: false,
        error: null as string | null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(isPending(getTalles), (state) => {
                state.entities = [];
                state.isLoading = true;
                state.error = null;
                state.headers = null;
            })
            .addMatcher(isFulfilled(getTalles), (state, action) => {
                state.isLoading = false;
                state.entities = action.payload?.data;
                state.headers = action.payload?.length;
                state.error = null;
            })
            .addMatcher(isRejected(getTalles), (state, action) => {
                state.isLoading = false;
                state.error = action.error.message ?? "Unknown error";
                state.entities = [];
            })
    }
})

export default TallesSlice.reducer;