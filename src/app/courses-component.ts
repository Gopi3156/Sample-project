
import { Component } from '@angular/core';
import {CoursesService} from './courses-service';


@Component({
  selector: 'courses',
  template: `<h2 style="padding-left: 10px;"> 
    {{items.length}} Courses available
             </h2>
  <ul *ngFor="let item of items">
  <li>{{item}}</li>
  </ul>
  `
})
export class CoursesComponent {

  title = 'String Interpolation';
  items: string [];

  constructor(service: CoursesService) {
    this.items = service.getCourses();
  }

  getTitle () {
    return this.title;
  }



}
