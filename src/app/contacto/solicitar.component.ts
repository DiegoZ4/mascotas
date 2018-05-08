import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { FormsService } from '../services/forms.service';

@Component({
  selector: 'app-solicitar',
  templateUrl: './solicitar.component.html',
  styles: []
})
export class SolicitarComponent implements OnInit {

  contactoForm: FormGroup;
  response:any;
  plan:number;

  constructor(
    private _forms:FormsService,
    private _activatedRoute:ActivatedRoute
  ) {
    this.contactoForm = new FormGroup ({
        nombre: new FormControl('',Validators.required),
        plan: new FormControl('',Validators.required),
        telefono: new FormControl('',Validators.required),
        email: new FormControl('',Validators.required),
        mensaje: new FormControl('',Validators.required)
    })
  }

  ngOnInit() {
    this._activatedRoute.params
        .subscribe(params =>{

          if(params.id){
          this.plan = params.id;
          } else {
            this.plan = 0;
          }

          console.log(this.plan);
        })

    this.contactoForm.controls['plan'].setValue(this.plan);
  }

  sendContact(){
    this.response = "";
    
    console.log(this.contactoForm.value)
    this._forms.sendApply(this.contactoForm.value)
    .subscribe(resp =>{
      console.log(resp)
      this.response = resp;
    })
  }

}
