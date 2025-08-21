import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import cookie from "js-cookie";
import { UrlState, UrlItem, CreateUrlParams } from "../types";

const initialState: UrlState = {
  list: [],
  isShortened: false,
  count: 10,
  countAll: 0,
  page: 1,
  search: "",
  status: "idle",
  error: null,
};

// Async Thunks ADD_URL action
export const createShortUrl = createAsyncThunk<
  UrlItem,
  CreateUrlParams,
  { rejectValue: string }
>("url/createShortUrl", async (params, { rejectWithValue }) => {
  try {
    const response = await axios.post("/api/url/submit", params, {
      headers: { Authorization: cookie.get("token") },
    });
    return response.data as UrlItem;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.error);
  }
});

const urlSlice = createSlice({
  name: "url",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createShortUrl.pending, (state) => {
        (state.status = "loading"), (state.error = null);
      })
      .addCase(createShortUrl.fulfilled, (state, action) => {
        (state.status = "succeeded"),
          (state.isShortened = true),
          state.list.unshift(action.payload);
      })
      .addCase(createShortUrl.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to create url";
      });
  },
});

export default urlSlice.reducer;
