import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { NewExamComponent } from './components/new-exam/new-exam.component';
import { StudentsComponent } from './components/students/students.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SubjectsComponent,
    NewExamComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DoctorModule { }
