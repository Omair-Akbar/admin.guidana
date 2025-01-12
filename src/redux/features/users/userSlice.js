import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Base URL for the API
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchUsers = createAsyncThunk("users/fetchUsers", async (_, thunkAPI) => {
  try {
    // Get token from sessionStorage
    const token = sessionStorage.getItem("authToken");

    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    // Make API request
    const response = await axios.get(`${API_BASE_URL}/api/user/users`, 
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
    
    console.log(response)
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

// Slice definition
const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [], // Initial state for users
    status: "idle", // idle | loading | succeeded | failed
    error: null, // To store errors
  },
  reducers: {
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    toggleUserStatus: (state, action) => {
      const user = state.users.find((user) => user.id === action.payload);
      if (user) {
        user.status = user.status === "Active" ? "Inactive" : "Active";
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload; // Adjust based on API response structure
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to fetch users";
      });
  },
});

export const { deleteUser, toggleUserStatus } = userSlice.actions;

export default userSlice.reducer;
