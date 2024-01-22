import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss'],
})
export class Child1Component {
  // param1!: string;

  // constructor(private route: ActivatedRoute) {}

  // ngOnInit() {
  //   this.route.params.subscribe((params) => {
  //     this.param1 = params['param1'];
  //     // You can access other parameters similarly if needed
  //   });
  // }
}
