import {Action, createReducer} from "@ngrx/store";

export interface LoadingState {
  loading: boolean
}

export const initialState: LoadingState = {
  loading: false
}

const reducer = createReducer(initialState);

export function loadingReducer(state: LoadingState | undefined, action: Action): LoadingState {
  return reducer(state, action);
}
