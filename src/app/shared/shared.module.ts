import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatrialModule } from './matrial.module';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    MatrialModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserModule,
    ToastrModule.forRoot()
  ],
  exports: [
    NavbarComponent,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    CommonModule,
    RouterModule,
    MatrialModule
  ]
})
export class SharedModule { }
