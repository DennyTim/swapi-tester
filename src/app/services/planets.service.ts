import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PlanetsRequestPayload } from "../interfaces/planets.model";

@Injectable({
  providedIn: "root"
})
export class PlanetsService {
  constructor(private httpService: HttpClient) {
  }

  public getPlanets(): Observable<PlanetsRequestPayload> {
    return this.httpService.get<PlanetsRequestPayload>('https://swapi.dev/api/planets');
  }
}
