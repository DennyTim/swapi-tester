import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import {
  RouterModule,
  Routes
} from "@angular/router";
import { PlanetsComponent } from "./planets.component";
import { PlanetsListComponent } from './components/planets-list/planets-list.component';

const routes: Routes = [
  {
    path: "",
    component: PlanetsComponent,
    children: [
      {
        path: "",
        component: PlanetsListComponent,
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule
  ],
  declarations: [
    PlanetsComponent,
    PlanetsListComponent
  ],
})
export class PlanetsModule {
}
