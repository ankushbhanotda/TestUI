import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  AccountForm: FormGroup;
  tokenInfo: any;
  constructor(private router: Router, private formBuilder: FormBuilder, private _authService: AuthService) { }

  ngOnInit(): void {

    this.AccountForm = this.formBuilder.group({
      userName: ['', [Validators.required,]],
      password: ['', [Validators.required,]],
    });
  }

  submit() {
    debugger;
    let values: any = this.AccountForm.value;
    this._authService.login(values).subscribe(res => {
      debugger;
      this.getSuccess(res);
    },
      (err: any) => {
        this.router.navigateByUrl('/login');
        alert("please enter correct user name and password");
      }
    );
  }
  getSuccess(res) {
    this.tokenInfo = res;
    debugger;
    if (this.tokenInfo != null) {
      this.router.navigateByUrl('/dashboard');
    }
  }
}
