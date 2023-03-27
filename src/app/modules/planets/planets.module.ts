import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import {
  RouterModule,
  Routes
} from "@angular/router";
import { PlanetsComponent } from "./planets.component";
import { PlanetsListComponent } from './components/planets-list/planets-list.component';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';
import {MatListModule} from "@angular/material/list";

const routes: Routes = [
  {
    path: "",
    component: PlanetsComponent,
    children: [
      {
        path: "",
        component: PlanetsListComponent,
        pathMatch: "full"
      },
      {
        path: ":id",
        component: PlanetDetailsComponent,
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatListModule
  ],
  declarations: [
    PlanetsComponent,
    PlanetsListComponent,
    PlanetDetailsComponent
  ],
})
export class PlanetsModule {
}
