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
import { UserService } from './services/user.service';

import { app_routing } from './app.routes';

import { HomeComponent } from './components/home/home.component';
import { HomeUserComponent } from './user/home-user/home-user.component';
import { MisionComponent } from './mision/mision.component';
import { PlanComponent } from './planes/plan.component';
import { ArticuloComponent } from './articulos/articulo.component';

@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    SliderComponent,
    PlanesComponent,
    ArticulosComponent,
    HomeComponent,
    HomeUserComponent,
    MisionComponent,
    PlanComponent,
    ArticuloComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    app_routing,
  ],
  providers: [ LoginService, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
