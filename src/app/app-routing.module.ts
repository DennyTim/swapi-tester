import { NgModule } from "@angular/core";
import {
  ExtraOptions,
  PreloadAllModules,
  RouterModule,
  Routes
} from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/planets",
    pathMatch: "full"
  },
  {
    path: "planets",
    loadChildren: () => import("./modules/planets/planets.module").then(m => m.PlanetsModule)
  }
];

const routerConfig: ExtraOptions = {
  preloadingStrategy: PreloadAllModules
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routerConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
