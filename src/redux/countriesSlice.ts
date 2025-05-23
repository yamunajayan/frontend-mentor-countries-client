// src/store/countrySlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Country, CountryState } from "../types";

const initialState: CountryState = {
  list: [],
  selectedCountry: null, // One specific country
  regionList: [], // Filtered countries by region
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

// Fetch single country
export const fetchCountryByName = createAsyncThunk<
  Country,
  string,
  { rejectValue: string }
>("countries/fetchCountryByName", async (name: string, thunkAPI) => {
  try {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const res = await fetch(`${baseUrl}/countries/${name}`);
    if (!res.ok) throw new Error("Country not found");
    return await res.json();
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

// Fetch countries by region
export const fetchCountriesByRegion = createAsyncThunk<
  Country[],
  string,
  { rejectValue: string }
>("countries/fetchCountriesByRegion", async (region: string, thunkAPI) => {
  try {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const res = await fetch(`${baseUrl}/regions/${region}/countries`);
    if (!res.ok) throw new Error("Region not found");
    return await res.json();
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
      })
      // Single country
      .addCase(fetchCountryByName.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCountryByName.fulfilled, (state, action) => {
        state.selectedCountry = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCountryByName.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Unknown error";
      })

      // Countries by region
      .addCase(fetchCountriesByRegion.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCountriesByRegion.fulfilled, (state, action) => {
        state.loading = false;
        state.regionList = action.payload;
      })
      .addCase(fetchCountriesByRegion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Unknown error";
      });
  },
});

export default countrySlice.reducer;
