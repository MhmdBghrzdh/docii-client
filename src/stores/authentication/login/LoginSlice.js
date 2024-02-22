import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import authenticationServices from '@/services/authentication'

const initialState = {}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    // login() {}
  }
})

// export const { login } = loginSlice.actions

export const login = createAsyncThunk(
  'login/login',
  async (payload) => await authenticationServices.login(payload)
)

export default loginSlice.reducer
