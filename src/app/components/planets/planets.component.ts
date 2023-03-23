import {
  Component,
  OnInit
} from "@angular/core";
import { PlanetsModel } from "./planets.model";
import { PlanetsService } from "./planets.service";

@Component({
  selector: "app-planets",
  templateUrl: "./planets.component.html",
  styleUrls: ["./planets.component.scss"]
})
export class PlanetsComponent implements OnInit {
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
