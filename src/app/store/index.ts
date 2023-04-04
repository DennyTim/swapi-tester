import {loadingReducer, LoadingState} from "./reducers/loading.reducer";

export interface AppState {
  loadingState: LoadingState
}

export const mainReducer = {
  loadingState: loadingReducer
};
