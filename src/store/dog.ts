import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PuppyEntity {
  name: string | 'puppy'
  ageWeeks: number | null
}

export interface PuppyState {
  entity: PuppyEntity
}

let initialState: PuppyState = {
  entity: { name: 'puppy', ageWeeks: 8 },
}

export const puppySlice = createSlice({
  name: 'puppy',
  initialState,

  reducers: {
    doSetPuppy: (state: PuppyState, action: PayloadAction<PuppyEntity>) => {
      state.entity = action.payload
    },
  },
})

export const { doSetPuppy } = puppySlice.actions

export const puppyReducer = puppySlice.reducer
