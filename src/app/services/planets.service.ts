import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, of, switchMap} from "rxjs";
import {PersonsModel, PlanetsModel, PlanetsRequestPayload} from "../interfaces/planets.model";

@Injectable({
  providedIn: "root"
})
export class PlanetsService {
  constructor(private httpService: HttpClient) {
  }

  public getPlanets(): Observable<PlanetsRequestPayload> {
    return this.httpService.get<PlanetsRequestPayload>('https://swapi.dev/api/planets');
  }

  public getPlanetById(id: string): Observable<PlanetsModel> {
    return this.httpService.get<PlanetsModel>(`https://swapi.dev/api/planets/${id}/`)
  }

  public getPlanetsByUrl(url: string): Observable<PlanetsRequestPayload> {
    return this.httpService.get<PlanetsRequestPayload>(url);
  }

  public getPersonsByUrl(url: string): Observable<PersonsModel> {
    return this.httpService.get<PersonsModel>(url);
  }

  public getPersonsByPlanet(urls: string[]): Observable<PersonsModel[]> {
    const personsList: PersonsModel[] = [];

    const process = (): Observable<PersonsModel | PersonsModel[]> => {
      const url = urls.shift();
      if (url) {
        return this.getPersonsByUrl(url)
          .pipe(
            switchMap((data) => {
              personsList.push(data);
              return process();
            })
          )
      } else {
        return of(personsList)
      }
    }

    return process() as Observable<PersonsModel[]>;
  }
}
