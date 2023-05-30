import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {AuthError} from "../../../../interfaces/auth.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public email = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  public password = new FormControl("", [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ]);

  public loginForm = new FormGroup({
    email: this.email,
    password: this.password
  });

  public inSubmission: boolean = false;
  public errors$?: Observable<AuthError | null>;

  public login(): void {
    //TODO: implement it after the auth state
  }
}
