import { NgModule } from "@angular/core";
import {
  ExtraOptions,
  PreloadAllModules,
  RouterModule,
  Routes
} from "@angular/router";
import { ErrorPageComponent } from "./components/error-page/error-page.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/planets",
    pathMatch: "full"
  },
  {
    path: "planets",
    loadChildren: () => import("./modules/planets/planets.module").then(m => m.PlanetsModule)
  },
  {
    path: "auth",
    loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "**",
    redirectTo: "/not-found"
  },
  {
    path: "not-found",
    component: ErrorPageComponent
  }
];

const routerConfig: ExtraOptions = {
  preloadingStrategy: PreloadAllModules
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
