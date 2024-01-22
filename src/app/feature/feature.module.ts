import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature/feature.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { Grandchild1Component } from './child1/grandchild1/grandchild1.component';
import { Grandchild2Component } from './child1/grandchild2/grandchild2.component';
import { Child3Component } from './child3/child3.component';
import { Grandchild3Component } from './child2/grandchild3/grandchild3.component';
import { Grandchild4Component } from './child2/grandchild4/grandchild4.component';


@NgModule({
  declarations: [
    FeatureComponent,
    Child1Component,
    Child2Component,
    Grandchild1Component,
    Grandchild2Component,
    Child3Component,
    Grandchild3Component,
    Grandchild4Component
  ],
  imports: [
    CommonModule, FeatureRoutingModule
  ]
})
export class FeatureModule { }
