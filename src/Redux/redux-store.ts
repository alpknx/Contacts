import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/auth-reducer";

const rootReducer = combineReducers({
	auth: authReducer
})

export const reduxStore = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch;
