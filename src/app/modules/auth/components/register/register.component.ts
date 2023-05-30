import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PasswordMatchingValidator} from "../../../../validators/password-matching.validator";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public name = new FormControl("", [
    Validators.required,
    Validators.minLength(3)
  ]);

  public email = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  public password = new FormControl("", [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ]);

  public confirmPassword = new FormControl("", [Validators.required]);

  public phoneNumber = new FormControl("", [
    Validators.required,
    Validators.minLength(13),
    Validators.maxLength(13)
  ])

  public age = new FormControl("", [
    Validators.required,
    Validators.min(18),
    Validators.max(130)
  ]);

  public registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirmPassword: this.confirmPassword,
    phoneNumber: this.phoneNumber
  }, [
    PasswordMatchingValidator.match(
      "password",
      "confirmPassword"
    )
  ]);

  public inSubmission: boolean = false;

  public register(): void {
    //TODO: implement it after the auth state
  }
}
