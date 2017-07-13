import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {CKEditorModule} from 'ng2-ckeditor';


import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { routing } from './routing';
import { AboutmeComponent } from './Components/aboutme/aboutme.component';
import { MainpageComponent } from './Components/mainpage/mainpage.component';
import { CreatecourseComponent } from './Components/createcourse/createcourse.component';
import { EditCourseComponent } from './Components/edit-course/edit-course.component';
import { CourseQuestionComponent } from './Components/course-question/course-question.component';
import { CourseContentComponent } from './Components/course-content/course-content.component';
import { ListCourseComponent } from './Components/list-course/list-course.component';
import { ListcourseComponent } from './Components/listcourse/listcourse.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutmeComponent,
    MainpageComponent,
    CreatecourseComponent,
    EditCourseComponent,
    CourseQuestionComponent,
    CourseContentComponent,
    ListCourseComponent,
    ListcourseComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    routing,
    FormsModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
