import {Action, createReducer, on} from "@ngrx/store";
import {hideLoading, setLoading} from "../actions/loading.action";

export interface LoadingState {
  loading: boolean
}

export const initialState: LoadingState = {
  loading: false
}

const reducer = createReducer(
  initialState,
  on(setLoading, (state) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(hideLoading, (state) => {
    return {
      ...state,
      loading: false
    }
  })
);

export function loadingReducer(state: LoadingState | undefined, action: Action): LoadingState {
  return reducer(state, action);
}
