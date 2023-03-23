import {
  Component,
  OnInit
} from "@angular/core";
import { PlanetsModel } from "../../../../interfaces/planets.model";
import { PlanetsService } from "../../../../services/planets.service";

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {
  public allPlanets: PlanetsModel[] = [];

  constructor(private planetsService: PlanetsService) {
  }

  public ngOnInit() {
    this.planetsService.getPlanets()
      .subscribe((data) => {
        this.allPlanets = data.results;
      });
  }
}
