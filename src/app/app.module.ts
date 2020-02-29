import { SummaryPipe } from './summary.pipe';
import { AuthorsService } from './authors.service';
import { CoursesService } from './course/courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { TitlecasePipe } from './titlecase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    FavouriteComponent,
    TitlecasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CoursesService, AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
