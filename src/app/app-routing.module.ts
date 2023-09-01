import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewExamComponent } from './doctor/components/new-exam/new-exam.component';
import { SubjectsComponent } from './doctor/components/subjects/subjects.component';
import { StudentsComponent } from './doctor/components/students/students.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ExamComponent } from './student/components/exam/exam.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';

const routes: Routes = [
  {path:'new-exam' , component:NewExamComponent},
  {path:'exam' , component:ExamComponent},
  {path:'subjects' , component:SubjectsComponent},
  {path:'students' , component:StudentsComponent},
  {path:'navbar' , component:NavbarComponent},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'logout' , component:LoginComponent},
  {path:'**' , component:LoginComponent , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
