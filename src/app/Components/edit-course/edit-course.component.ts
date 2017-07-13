import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import {CKEditorComponent} from 'ng2-ckeditor';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
   Topic: String = '';
   Description: String = '';
   Article: String;
   content: String = '';
  constructor(private edit: AngularFireDatabase , private router: Router) { 
      if(localStorage.getItem('CourseID') != null){
          edit.list('/Course',{
           query:{
               orderByKey: true,
               equalTo: localStorage.getItem('CourseID')
           }
          }).subscribe((data)=>{
            this.Topic = data[0].Topic;
            this.Description = data[0].Description;
            this.content = data[0].Content;
          });
      }else{
        this.router.navigate(['/']);
      }
  }

  editCourse(){
    this.edit.list('/Course').update(localStorage.getItem('CourseID'),{
      Topic: this.Topic,
      Description: this.Description,
      Content: this.content
    }).then((data)=>{
      console.log('เพิ่มเรียบร้อย');
    }).catch((err)=>{
      console.log(err);
    });


  }
  ngOnInit() {
  }
}
