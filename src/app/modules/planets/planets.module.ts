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
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {LetModule} from "@ngrx/component";
import {IsArrayPipe} from "../../pipes/is-array.pipe";
import {PlanetDetailsResolver} from "../../resolvers/planet-details.resolver";

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
        resolve: { _: PlanetDetailsResolver },
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
        MatListModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        LetModule
    ],
  declarations: [
    PlanetsComponent,
    PlanetsListComponent,
    PlanetDetailsComponent,
    IsArrayPipe
  ],
})
export class PlanetsModule {
}
