import {Inject, Injectable} from "@angular/core";
import {DOCUMENT} from "@angular/common";
import {AppState} from "../store";
import {Store} from "@ngrx/store";
import {hideLoading, setLoading} from "../store/actions/loading.action";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private numberOfLoaders: number = 0;
  private loading?: HTMLElement;

  constructor(
    @Inject(DOCUMENT)
    private document: Document,
    private store: Store<AppState>
  ) {
  }

  public showLoading(isLoading: boolean = false): void {
    !this.loading && this.initLoading(isLoading);
    if (this.numberOfLoaders === 0) {
      requestAnimationFrame(() => {
        if (this.numberOfLoaders !== 0) {
          this.startLoading() && requestAnimationFrame(() => {
            this.setLoadingProcess(isLoading);
          })
        }
      })
    }
    this.numberOfLoaders++;
  }

  public hideLoading(isLoading: boolean = false): void {
    !this.loading && this.initLoading(isLoading);

    if (this.numberOfLoaders === 1) {
      requestAnimationFrame(() => {
        this.numberOfLoaders === 0 && this.completeLoading(isLoading);
      })
    }

    this.numberOfLoaders--;
  }

  private initLoading(isLoading: boolean): void {
    this.loading = this.document.createElement("div");
    this.completeLoading(isLoading) && this.document.body.appendChild(this.loading);
  }

  private startLoading(): boolean {
    if (this.loading) {
      this.loading.className = "top-loader _loading-start";
    }
    return true;
  }

  private setLoadingProcess(isLoading: boolean): void {
    if (this.loading) {
      this.loading.className = "top-loader _loading";
    }

    !isLoading && this.setLoader();
  }

  private completeLoading(isLoading: boolean): boolean {
    if (this.loading) {
      this.loading.className = "top-loader";
    }

    !isLoading && this.hideLoader();
    return true;
  }

  private setLoader(): void {
    this.store.dispatch(setLoading());
  }

  private hideLoader(): void {
    this.store.dispatch(hideLoading());
  }
}
