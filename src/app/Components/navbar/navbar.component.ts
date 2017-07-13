import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  User:Observable<firebase.User>;

  constructor(private Auth:AngularFireAuth , private router: Router) {
    this.User = Auth.authState;
   }
   
   authFacebook(){
     this.Auth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider).then((data)=>{
       localStorage.setItem('UID',data.user.uid);
       this.router.navigate(['/createCourse']);
     });
   }

   authGoogle(){
     this.Auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider).then((data)=>{
       localStorage.setItem('UID',data.user.uid);
       this.router.navigate(['/createCourse']);
     });
   }

   authTwitter(){
     this.Auth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider);
   }

   authGithub(){
     this.Auth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider);
   }

   logout(){
     this.Auth.auth.signOut();
     localStorage.removeItem('UID');
   }

  ngOnInit() {
  }

}
