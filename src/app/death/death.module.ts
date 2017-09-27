import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeathRoutingModule } from './death-routing.module';
import { DecedentDetailComponent } from './decedent-detail/decedent-detail.component';
import { DecedentService } from './shared/decedent.service';

@NgModule({
  imports: [
    CommonModule,
    DeathRoutingModule
  ],
  declarations: [DecedentDetailComponent],
  providers: [DecedentService]
})
export class DeathModule { }
