import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { LoginService } from '../../services/login.service';


import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styles: []
})
export class SliderComponent implements OnInit {

  loginForm : FormGroup;
  user:string;
  password:string;

  constructor(
    private _login:LoginService,
    private router:Router
  ) {
    this.loginForm = new FormGroup ({
      user: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit() {
  }


  login(){
    this.user = this.loginForm.value.user;
    this.password = this.loginForm.value.password;

    this._login.makeLogin(this.user, this.password)
        .subscribe( (resp:any)=>{
          console.log(resp);
          localStorage.setItem('userData', JSON.stringify(resp));
          this.router.navigate(['/user']);
        },
        error => {
        console.log(error);
      })

  }
}
