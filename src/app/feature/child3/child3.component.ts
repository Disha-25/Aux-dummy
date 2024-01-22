import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss'],
})
export class Child3Component {
  // p: any;

  // constructor(private route: ActivatedRoute) {}

  // ngOnInit() {
  //   this.route.paramMap.subscribe((params) => {
  //     const idParam = params.get('id');

  //     if (idParam !== null) {
  //       const pId = +idParam;
  //       // You can fetch pizza details from a service based on the pizzaId
  //       // For now, let's use a simple array as a placeholder
  //       this.p = { id: pId, name: `P ${pId}` };
  //     } else {
  //       // Handle the case where idParam is null (e.g., redirect, show an error)
  //       console.error('Invalid pizza ID');
  //     }
  //   });
  // }
}