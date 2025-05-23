// src/store/countrySlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Country, CountryState } from "../types";

const initialState: CountryState = {
  list: [],
  loading: false,
  error: null,
};

export const fetchCountries = createAsyncThunk<
  Country[],
  void,
  { rejectValue: string }
>("countries/fetchCountries", async (_, thunkAPI) => {
  try {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const response = await fetch(`${baseUrl}/countries`);
    if (!response.ok) throw new Error("Failed to fetch countries");
    return await response.json();
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCountries.fulfilled,
        (state, action: PayloadAction<Country[]>) => {
          state.loading = false;
          state.list = action.payload;
        }
      )
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Unknown error";
      });
  },
});

export default countrySlice.reducer;
