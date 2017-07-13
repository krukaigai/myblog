import { Router } from '@angular/router';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-question',
  templateUrl: './course-question.component.html',
  styleUrls: ['./course-question.component.css']
})
export class CourseQuestionComponent implements OnInit {
  listBeforQuestions: FirebaseListObservable<any[]>;
  beforeDetailQuestion: String = '';
  beforeAns1: String = '';
  beforeAns2: String = '';
  beforeAns3: String = '';
  beforeAns4: String = '';
  beforeAnsCorrect: String = '';
  beforeAdded: String = '';
  
  listAfterQuestions: FirebaseListObservable<any[]>;
  afterDetailQuestion: String = '';
  afterAns1: String = '';
  afterAns2: String = '';
  afterAns3: String = '';
  afterAns4: String = '';
  afterAnsCorrect: String = '';
  afterAdded: String = '';

  constructor(private question: AngularFireDatabase,private router: Router) {
     this.listAfterQuestion();
     this.listBeforeQuestion();
    

   }

   listBeforeQuestion(){
    this.listBeforQuestions = this.question.list('/BeforeQuestion',{
      query:{
        orderByChild:'CourseKey',
        equalTo: localStorage.getItem('CourseID')
      }
    });
   }

   listAfterQuestion(){
     this.listAfterQuestions = this.question.list('/AfterQuestion',{
      query:{
        orderByChild:'CourseKey',
        equalTo: localStorage.getItem('CourseID')
      }
    });

   }

   addBeforeQuestion(){
     this.question.list('/BeforeQuestion').push({
       CourseKey: localStorage.getItem('CourseID'),
       DetailQuestion: this.beforeDetailQuestion,
       Ans1: this.beforeAns1,
       Ans2: this.beforeAns2,
       Ans3: this.beforeAns3,
       Ans4: this.beforeAns4,
       AnsCorrect: this.beforeAnsCorrect
     }).then((data)=>{
       console.log('เพิ่มเรียบร้อย');
       this.beforeDetailQuestion = '';
       this.beforeAns1 = '';
       this.beforeAns2 = '';
       this.beforeAns3 = '';
       this.beforeAns4 = '';
       this.beforeAnsCorrect  = '';
       this.beforeAdded = 'เพิ่มข้อสอบก่อนเรียนเรียบร้อย';
     }).catch((err)=>{
       console.log(err);
       this.afterAdded= 'เกิดปัญหาในการเพิ่มข้อสอบ';
     });
     
   }
   
   addAfterQuestion(){
     this.question.list('/AfterQuestion').push({
       CourseKey: localStorage.getItem('CourseID'),
       DetailQuestion: this.afterDetailQuestion,
       Ans1: this.afterAns1,
       Ans2: this.afterAns2,
       Ans3: this.afterAns3,
       Ans4: this.afterAns4,
       AnsCorrect: this.afterAnsCorrect
     }).then((data)=>{
       console.log('เพิ่มเรียบร้อย');
       this.afterDetailQuestion = '';
       this.afterAns1 = '';
       this.afterAns2 = '';
       this.afterAns3 = '';
       this.afterAns4 = '';
       this.afterAnsCorrect = '';
       this.afterAdded = 'เพิ่มข้อสอบก่อนเรียนเรียบร้อย';

     }).catch((err)=>{
       this.afterAdded = 'เพิ่มข้อสอบก่อนเรียนเรียบร้อย';
       console.log(err);
     });

   }

  ngOnInit() {
  }

}
