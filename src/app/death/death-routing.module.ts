import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DecedentDetailComponent } from './decedent-detail/decedent-detail.component';

const routes: Routes = [
  {path: 'decedent', component: DecedentDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeathRoutingModule { }
