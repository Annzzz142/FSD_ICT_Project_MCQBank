import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from  './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TestComponent } from './test/test.component'; 
import { ClassComponent } from './class/class.component'; 
import { SubjectComponent } from './subject/subject.component'; 
import { QuizComponent } from './quiz/quiz.component'; 

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'aboutUs',
    component: AboutUsComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'class',
    component: ClassComponent
  },
  {
    path: 'subject',
    component: SubjectComponent
  },
  {
    path: 'quiz',
    component: QuizComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
