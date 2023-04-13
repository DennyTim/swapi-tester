import {Component} from '@angular/core';
import {PlanetsModel} from "../../../../interfaces/planets.model";
import {Observable} from "rxjs";
import {PlanetsStateService} from "../../../../services/planets-state.service";

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})
export class PlanetDetailsComponent {
  public planetData$: Observable<Partial<PlanetsModel>> = this.planetStateService.getSelectedPlanet();
  public planetParams: Array<(keyof PlanetsModel)> = [
    "rotation_period",
    "diameter",
    "climate",
    "gravity",
    "terrain",
    "population"
  ];

  constructor(private planetStateService: PlanetsStateService) {
  }
}
