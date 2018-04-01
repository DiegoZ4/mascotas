import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { SliderComponent } from './components/slider/slider.component';
import { PlanesComponent } from './components/planes/planes.component';
import { ArticulosComponent } from './components/articulos/articulos.component';


import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    SliderComponent,
    PlanesComponent,
    ArticulosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
