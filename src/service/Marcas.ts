import { createSlice, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";
import { createHttpAsyncThunk } from "./ReduxThunkService";


const url = '/marcas';

export const getMarcas = createHttpAsyncThunk('marcas/getMarcas', 'get', url)

const MarcasSlice = createSlice({
    name: 'marcasReducer',
    initialState: {
        entities: [],
        headers: null,
        isLoading: false,
        error: null as string | null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(isPending(getMarcas), (state) => {
                state.entities = [];
                state.isLoading = true;
                state.error = null;
                state.headers = null;
            })
            .addMatcher(isFulfilled(getMarcas), (state, action) => {
                state.isLoading = false;
                state.entities = action.payload?.data;
                state.headers = action.payload?.length;
                state.error = null;
            })
            .addMatcher(isRejected(getMarcas), (state, action) => {
                state.isLoading = false;
                state.error = action.error.message ?? "Unknown error";
                state.entities = [];
            })
    }
})

export default MarcasSlice.reducer;