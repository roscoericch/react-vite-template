import { configureStore, combineReducers, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name:"user",
  initialState:{
    user:"",
    teams:[],
    calls:[]
  },
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    updateTeams: (state, action) => {
      state.teams = action.payload;
    },
    updateCalls: (state, action) => {
      state.calls = action.payload;
    }
  },
})

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer
});
  

export const {
  updateCalls,
  updateTeams,
  updateUser
} = userSlice.actions;

export type StoreType = ReturnType<typeof store.dispatch>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;