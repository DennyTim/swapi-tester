import {Component, OnInit} from '@angular/core';
import {PlanetsService} from "../../../../services/planets.service";
import {PlanetsModel} from "../../../../interfaces/planets.model";
import {ActivatedRoute, Params} from "@angular/router";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})
export class PlanetDetailsComponent implements OnInit {

  public planetParams: Array<(keyof PlanetsModel)> = [
    "rotation_period",
    "diameter",
    "climate",
    "gravity",
    "terrain",
    "population"
  ];
  public planet: Partial<PlanetsModel> = {};

  constructor(
    private planetsService: PlanetsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({id}: Params) =>
        this.planetsService.getPlanetById(id)
      )
    ).subscribe((data) => {
      this.planet = data;
    })
  }
}
