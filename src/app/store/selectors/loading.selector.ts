import {AppState} from "../index";
import {LoadingState} from "../reducers/loading.reducer";
import {createSelector} from "@ngrx/store";

export const selectLoadingState = (state: AppState): LoadingState => state.loadingState

export const getLoadingStatus = createSelector(
  selectLoadingState,
  (loadingState: LoadingState): boolean => loadingState.loading
);
