import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss'],
})
export class Child2Component {
  ps = [
    { id: 3, name: 'abc' },
    { id: 4, name: 'xyz' },

  ];
  getChildRoute(p: any): any[] {
    return ['child2', p.id, { outlets: { ['grand' + p.id]: 'grandchild' + p.id } }];
  }
};