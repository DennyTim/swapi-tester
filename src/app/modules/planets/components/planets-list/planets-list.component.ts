import {Component, OnInit} from "@angular/core";
import {PlanetsModel} from "../../../../interfaces/planets.model";
import {PlanetsService} from "../../../../services/planets.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {
  public allPlanets: PlanetsModel[] = [];

  constructor(
    private planetsService: PlanetsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  public ngOnInit() {
    this.planetsService.getPlanets()
      .subscribe((data) => {
        this.allPlanets = data.results;
      });
  }

  public trackById(_: number, item: PlanetsModel): string {
    return item.id;
  }

  public handlePlanetDetails(url: string): void {
    const planetParams = url.split("/").filter(item => item);
    const id = Number(planetParams[planetParams.length - 1]);

    void this.router.navigate([`/planets/${id}`],  { relativeTo: this.route });
  }
}
