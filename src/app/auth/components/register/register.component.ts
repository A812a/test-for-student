import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  userForm!:FormGroup;
  students:any[] = []
  constructor(private _formBiulder:FormBuilder , private _authService:AuthService , private _router:Router , private _toastr:ToastrService) {
    this.createFrom()
    this.getUsers()
  }

  createFrom() {
    this.userForm = this._formBiulder.group({
      userName:['', [Validators.required]],
      email:['', [Validators.required , Validators.email]],
      password:['', [Validators.required]],
      configPassword:['', [Validators.required]]
    })
  }

  getUsers() {
    this._authService.getUsers('students').subscribe((res:any) => {
      console.log(res);
      this.students = res
    })
  }

  submit() {
    const model = {
      userName: this.userForm.value.userName,
      email: this.userForm.value.email,
      password: this.userForm.value.password
    }

    let index = this.students.findIndex(item => item.email == this.userForm.value.email)
    if(index != -1) {
      console.log(index)
      this._toastr.error('هذا الإيميل موجود بالفعل' , "" ,{
        disableTimeOut: false,
        titleClass: "toastr_title",
        messageClass: "toastr_message",
        timeOut:5000,
        closeButton: true,
      })
    } else {
      this._authService.createUser(model).subscribe((res:any) => {
        this._toastr.success('تم انشاء الحساب بنجاح' , "" ,{
          disableTimeOut: false,
          titleClass: "toastr_title",
          messageClass: "toastr_message",
          timeOut:5000,
          closeButton: true,
        })
        this._router.navigate(['/login'])
      })
    }


  }

}
