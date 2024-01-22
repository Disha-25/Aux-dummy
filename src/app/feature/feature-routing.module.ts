import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature/feature.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Grandchild1Component } from './child1/grandchild1/grandchild1.component';
import { Grandchild2Component } from './child1/grandchild2/grandchild2.component';
import { Grandchild3Component } from './child2/grandchild3/grandchild3.component';
import { Grandchild4Component } from './child2/grandchild4/grandchild4.component';
//import { Child3Component } from './child3/child3.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureComponent,
    children: [
      {
        path: 'child1',
        component: Child1Component,
        outlet: 'aux1',
        children: [
          {
            path: 'grandchild1',
            component: Grandchild1Component,
            outlet: 'grand1',
          },
          {
            path: 'grandchild2',
            component: Grandchild2Component,
            outlet: 'grand2',
          },
        ],
      },
      {
        path: 'child2/:id',
        component: Child2Component,
        outlet: 'aux2',
            children: [
              { path: '', pathMatch: 'full', redirectTo: 'grandchild3' },
              { path: 'grandchild3', component: Grandchild3Component ,outlet:'grand3'},
              { path: 'grandchild4', component: Grandchild4Component ,outlet:'grand4'},
            ],
          },
          //{ path: '', pathMatch: 'full', redirectTo: 'grandchild4' },
        {
          path: 'child2',
          component: Child2Component,
          outlet: 'aux2',
          
        },
      
      //{ path: 'child2/:id', component: Child3Component}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
