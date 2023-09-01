import { Component } from '@angular/core';
import { DoctorService } from '../../doctor.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-exam',
  templateUrl: './new-exam.component.html',
  styleUrls: ['./new-exam.component.scss']
})
export class NewExamComponent {

  name = new FormControl()
  questionsForm!:FormGroup
  subjectName:string = '';
  questions:any[] = []
  stepperIndex = 0;
  correctAnswer:any
  startAdd:boolean = false;
  preview:boolean = false;
  id!:any;

  constructor(private _doctorService:DoctorService ,
     private _toastr:ToastrService ,
      private _router:Router ,
       private _formBuilder:FormBuilder) {
    this.createForm()
  }

  start() {
    if(this.name.value == '') {
      this._toastr.error('يرجى إدخال إسم المادة')
    } else {
      this.startAdd = true
      this.subjectName = this.name.value
    }

    if(this.startAdd = true) {
      this.stepperIndex = 1
    }
  }

  createForm() {
    this.questionsForm = this._formBuilder.group({
      question :['' , [Validators.required]],
      answer1 : ['' , [Validators.required]],
      answer2 : ['' , [Validators.required]],
      answer3 : ['' , [Validators.required]],
      answer4 : ['' , [Validators.required]],
    })
  }

  getCorrect(event:any) {
    this.correctAnswer = event.value
  }

  createQuestion() {
    if(this.correctAnswer) {
      const model = {
        question : this.questionsForm.value.question,
        answer1 : this.questionsForm.value.answer1,
        answer2 : this.questionsForm.value.answer2,
        answer3 : this.questionsForm.value.answer3,
        answer4 : this.questionsForm.value.answer4,
        correctAnswer : this.questionsForm.value[this.correctAnswer]
      }
      this.questions.push(model)
      this.questionsForm.reset()
    } else {
      this._toastr.error('قم باختيار الإجابه الصحيحه')
    }
  }

  clearForm() {
    this.questionsForm.reset()
  }

  submit() {
    const model = {
      name : this.subjectName,
      questions : this.questions
    }

    if(this.preview) {
      this.stepperIndex = 2
    } else {
      this._doctorService.createSubjects(model).subscribe((res:any) => {
        this.preview = true
        this.id = res.id
      })
    }
  }


  delete(index:any) {

    this.questions.splice(index , 1)
    const model = {
      name : this.subjectName,
      questions : this.questions
    }
    this._doctorService.updataSubjects(model,this.id).subscribe((res:any) => {
      this._toastr.success('لقد تم حذف السؤال بنجاح')
    })
  }

  cancel() {
    this.questionsForm.reset()
    this.subjectName = ''
    this.questions = [];
    this.name.reset()
    this.stepperIndex = 0;
    this.startAdd = false
  }

}
