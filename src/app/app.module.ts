import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import {CoursesComponent} from './courses-component';
import { CourseComponent } from './course/course.component';
import {CoursesService} from './courses-service';
import {ShortDatePipe} from './shortdate-pipe';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    ShortDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
