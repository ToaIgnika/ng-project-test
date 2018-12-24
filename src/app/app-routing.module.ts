import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CloudResourcesComponent } from './cloud-resources/cloud-resources.component';

const routes: Routes = [
  { path: '', redirectTo: '/cloud-resources', pathMatch: 'full'},
  { path: 'cloud-resources', component: CloudResourcesComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
