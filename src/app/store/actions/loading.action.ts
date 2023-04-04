import {createAction} from "@ngrx/store";

export enum LoadingActions {
  setLoading = '[Loading State] Request Loading',
  hideLoading = '[Loading State] Request Hide Loading'
}

export const setLoading = createAction(LoadingActions.setLoading);
export const hideLoading = createAction(LoadingActions.hideLoading);
