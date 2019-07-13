import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AjoutComponent } from './ajout/ajout.component';
import { GestionComponent } from './gestion/gestion.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  {path:'',component:ApplicationComponent,children:[
    {path:'',component:DashboardComponent},
    {path:'ajout',component:AjoutComponent},
    {path:'gestion/:id',component:GestionComponent},
    {path:'poc',component:ContainerComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
