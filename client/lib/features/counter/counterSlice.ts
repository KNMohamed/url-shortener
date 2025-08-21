import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number
  loading: boolean
  error: string | null
}

const initialState: CounterState = {
  value: 0,
  loading: false,
  error: null,
}

// Async thunk example
export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async (amount: number) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return amount
  }
)

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    reset: (state) => {
      state.value = 0
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.loading = false
        state.value += action.payload
      })
      .addCase(incrementAsync.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Something went wrong'
      })
  },
})

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions
export default counterSlice.reducer