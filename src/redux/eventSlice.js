import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  users: [],
  status: 'idle', 
  error: null
};


export const fetchEvent = createAsyncThunk('users/fetchUsers', async () => {
    console.log('here')
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
});


const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvent.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEvent.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchEvent.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});


// export { fetchUsers };
export default usersSlice.reducer;
