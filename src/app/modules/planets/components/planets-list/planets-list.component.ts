import {Component, OnInit} from "@angular/core";
import {PlanetsModel} from "../../../../interfaces/planets.model";
import {PlanetsService} from "../../../../services/planets.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AppState} from "../../../../store";
import {select, Store} from "@ngrx/store";
import {getLoadingStatus} from "../../../../store/selectors/loading.selector";
import {Observable} from "rxjs";
import {PlanetsStateService} from "../../../../services/planets-state.service";
import {selectAllPlanets} from "../../../../store/selectors/planets.selector";

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {
  public allPlanets$?: Observable<PlanetsModel[]>;
  public loadingStatus$?: Observable<boolean>;

  constructor(
    private planetsService: PlanetsService,
    private planetsStateService: PlanetsStateService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
  }

  public ngOnInit() {
    this.planetsStateService.loadPlanets();

    this.allPlanets$ = this.store.pipe(select(selectAllPlanets)) as Observable<PlanetsModel[]>;

    this.loadingStatus$ = this.store.pipe(select(getLoadingStatus))
  }

  public trackById(_: number, item: PlanetsModel): string {
    return item.id;
  }

  public async handlePlanetDetails(url: string): Promise<void> {
    const planetParams = url.split("/").filter(item => item);
    const id = planetParams[planetParams.length - 1];

    try {
      if (!id) {
        return Promise.reject(new Error(`Planet id wasn't retrieved`))
      }

      const isNavigated = await this.router.navigate(
        [`/planets/${id}`],
        {relativeTo: this.route}
      );

      if (!isNavigated) {
        return Promise.reject(new Error(`Current planet wasn't loaded`))
      }

      this.planetsStateService.loadPlanetById(id);
    } catch (err) {
      console.error(`This error occurred in routing process with following error `, err)
    }
  }

  public loadPlanets(): void {
    this.planetsStateService.loadMorePlanets();
  }
}
