import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { PricingComponent } from './pricing/pricing.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    TeamComponent,
    PricingComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule
  ]
})
export class FeaturesModule { }
