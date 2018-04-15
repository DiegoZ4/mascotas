import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeUserComponent } from './user/home-user/home-user.component';
import { MisionComponent } from './mision/mision.component';
import { PlanComponent } from './planes/plan.component';

const app_routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: HomeUserComponent },
  { path: 'mision', component: MisionComponent },
  { path: 'plan/:id', component: PlanComponent },
  //{ path: '', pathMatch: 'full', redirectTo: '' },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:false});
