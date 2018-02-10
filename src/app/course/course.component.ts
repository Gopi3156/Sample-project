import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  date: Date;
  messages$: Observable<string>;
  string: string;
  email: string;
  flag: Boolean = true;
  format = 'longDate';
  toggleFlag: Boolean = true;

  constructor() {
    console.log('Constructor Called');
    /*this.email = 'gopi.krishna3156@gmail.com';*/
  }

  ngOnInit() {
    console.log('ngInit Called');
    this.date = new Date(1988, 3, 15);
    this.string = 'Gopi';

  }

  toggle() {
    this.toggleFlag = !this.toggleFlag;
  }


}
