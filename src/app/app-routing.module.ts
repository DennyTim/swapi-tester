import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsComponent } from "./components/planets/planets.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/planets",
    pathMatch: "full"
  },
  {
    path: 'planets',
    component: PlanetsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
