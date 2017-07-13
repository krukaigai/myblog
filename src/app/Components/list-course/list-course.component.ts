
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {
  listCourse: FirebaseListObservable<any[]>;

  constructor(private list: AngularFireDatabase) { 
    this.listAllCourse();

  }

  listAllCourse(){
    this.listCourse = this.list.list('/Course');
  }

  ngOnInit() {
  }

}
