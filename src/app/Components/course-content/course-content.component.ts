import { route } from './../../routing';
import { AngularFireDatabase ,FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css']
})
export class CourseContentComponent implements OnInit {
  content: FirebaseListObservable<any[]>;

  constructor(private Content: AngularFireDatabase,private router: ActivatedRoute) {
    router.params.subscribe((params)=>{
      this.showContent(params.CourseID);
    });

   }

   showContent(CourseID: String){
     this.content = this.Content.list('/Course',{
       query:{
         orderByKey: true,
         equalTo: CourseID
       }
     })

   }

  ngOnInit() {
  }

}
