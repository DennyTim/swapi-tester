import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {InputComponent} from './components/input/input.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxMaskModule} from "ngx-mask";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    RouterModule.forChild([
      {
        path: "",
        component: AuthComponent,
        children: [
          {
            path: "register",
            component: RegisterComponent,
            pathMatch: "full"
          },
          {
            path: "login",
            component: LoginComponent,
            pathMatch: "full"
          }
        ]
      }
    ]),
    MatButtonModule
  ]
})
export class AuthModule {
}
