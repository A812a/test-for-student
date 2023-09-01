import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

  displayedColumns:any;
  dataTable:any
  dataSource:any;
 constructor(private _authService:AuthService) {
  this.displayedColumns = ['position', 'name', 'subjectName', 'degree'];
  this.getStudents()
 }

 getStudents() {
  this._authService.getUsers('students').subscribe((res:any) => {
    console.log(res);
    this.dataSource = res.map((student:any) => {
      if(student?.subjects) {
          return student?.subjects?.map((sub:any) => {
            return {
              name: student.username,
              subjectName: sub.name,
              degree: sub.degree
            }
        })
        } else {
          return [{
            name: student?.username,
            subjectName: "-",
            degree: "-"
          }]
        }
    })
    this.dataTable = []
    this.dataSource.forEach((item:any) => {
      item.forEach((subItem:any) => {
        this.dataTable.push( {
          name: subItem.name,
          subjectName: subItem.subjectName,
          degree: subItem.degree
        })
      })
    })
    console.log(this.dataTable)
    console.log(this.dataSource)
  })
 }
}
