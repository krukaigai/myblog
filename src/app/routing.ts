import { Routes, RouterModule } from '@angular/router';

import { MainpageComponent } from './Components/mainpage/mainpage.component';
import { CreatecourseComponent } from './Components/createcourse/createcourse.component';
import { CourseQuestionComponent } from './Components/course-question/course-question.component';
import { CourseContentComponent } from './Components/course-content/course-content.component';
import { ListCourseComponent } from './Components/list-course/list-course.component';
import { EditCourseComponent } from './Components/edit-course/edit-course.component';

export const route: Routes = [
    {path: '' , component: MainpageComponent},
    {path: 'createCourse' ,component: CreatecourseComponent},
    {path: 'editCourse' ,component: EditCourseComponent},
    {path: 'addQuestion' ,component:CourseQuestionComponent},
    {path: 'courseContent/:CourseID',component:CourseContentComponent},
    {path: 'listcourse',component:ListCourseComponent}
    ];
export const routing = RouterModule.forRoot(route);