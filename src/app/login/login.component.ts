import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/service/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SignJWT } from "jose"
import { EncodedJWTSecretKey } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService,
    private router: Router
  ) {
    this.loginForm = formBuilder.group({});
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    });
  }

  async login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      this.router.navigateByUrl('/dashboard');
      this.toastrService.success("Welcome back, Amr", "Successfully logged in")
      this.userService.login({ email, password }).subscribe({
        next: async (data) => {
          var clientToken = await new SignJWT({ sub: data.token }).sign(EncodedJWTSecretKey)
          localStorage.setItem('token', clientToken);
        },
        error: () => this.toastrService.error("Incorrect email or password", "Login failed")
      })
    }
  }
}
