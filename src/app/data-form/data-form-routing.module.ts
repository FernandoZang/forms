import { AuthGuard } from './../login/login/auth.guard';
import { DataFormComponent } from './data-form/data-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'agro', component: DataFormComponent, canActivate:[AuthGuard]},
  {path: '', component: DataFormComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataFormRoutingModule { }
