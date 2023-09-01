import { Component } from '@angular/core';
import { DoctorService } from '../../doctor.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent {

  subjects:any[] = []
  role:string = ''
  constructor(private _doctorService:DoctorService , private _toastr:ToastrService , private _authervice:AuthService) {
    this.getSubjects()
    this.getRole()
  }

  getSubjects() {
    this._doctorService.getAllSubjects().subscribe((res:any) => {
      this.subjects = res
      console.log(res)
    })
  }

  getRole() {
    this._authervice.getRole().subscribe((res:any) => {
      console.log(res)
      this.role = res.role
    })
  }

  delete(index:any) {
    let id = this.subjects[index].id
    this.subjects.splice(index , 1)
    this._doctorService.deleteSubjects(id).subscribe((res:any) => {
      this._toastr.success('لقد تم حذف الماده بنجاح')
    })
  }
}
