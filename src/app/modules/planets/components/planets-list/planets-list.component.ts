import {Component, OnInit} from "@angular/core";
import {PlanetsModel, PlanetsRequestPayload} from "../../../../interfaces/planets.model";
import {PlanetsService} from "../../../../services/planets.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AppState} from "../../../../store";
import {select, Store} from "@ngrx/store";
import {getLoadingStatus} from "../../../../store/selectors/loading.selector";
import {Observable, pluck} from "rxjs";
import {PlanetsStateService} from "../../../../services/planets-state.service";
import {selectPlanetsList} from "../../../../store/selectors/planets.selector";

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {
  // public payload: Partial<PlanetsRequestPayload> = {};
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

    this.allPlanets$ = this.store.pipe(select(selectPlanetsList), pluck('results')) as Observable<PlanetsModel[]>;

    this.loadingStatus$ = this.store.pipe(select(getLoadingStatus))
  }

  public trackById(_: number, item: PlanetsModel): string {
    return item.id;
  }

  public handlePlanetDetails(url: string): void {
    const planetParams = url.split("/").filter(item => item);
    const id = Number(planetParams[planetParams.length - 1]);

    void this.router.navigate([`/planets/${id}`], {relativeTo: this.route});
  }

  public loadPlanets(): void {
    // if (this.payload.next) {
    //   this.planetsService.getPlanetsByUrl(this.payload.next)
    //     .subscribe((data) => {
    //       this.allPlanets = [...this.allPlanets, ...data.results];
    //       this.payload = data;
    //     })
    // }
  }
}
