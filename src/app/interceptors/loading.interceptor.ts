import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {concatMap, finalize, Observable, timer} from 'rxjs';
import {LoadingService} from "../services/loading.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingService.showLoading();

    return timer(200)
      .pipe(
        concatMap(() => {
          return next.handle(request)
            .pipe(finalize(() => this.loadingService.hideLoading()))
        })
      );
  }
}
