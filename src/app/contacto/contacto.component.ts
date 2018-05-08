import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormsService } from '../services/forms.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: []
})
export class ContactoComponent implements OnInit {

  contactoForm: FormGroup;
  response:any;

  constructor(
    private _forms:FormsService
  ) {
    this.contactoForm = new FormGroup ({
        nombre: new FormControl('',Validators.required),
        apellido: new FormControl('',Validators.required),
        telefono: new FormControl('',Validators.required),
        email: new FormControl('',Validators.required),
        mensaje: new FormControl('',Validators.required)
    })
  }

  ngOnInit() {
  }

  sendContact(){
    console.log(this.contactoForm.value)
    this._forms.sendContact(this.contactoForm.value)
    .subscribe(resp =>{
      console.log(resp)
      this.response = resp;
    })
  }

}
