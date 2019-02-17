import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{
    FormsModule,ReactiveFormsModule
}from'@angular/forms';
import { MeenComponent } from './meen/meen.component';
import { FormComponent } from './form/form.component';
import { DetailComponent } from './detail/detail.component'

@NgModule({
  
  declarations: [
    AppComponent,
    MeenComponent,
    FormComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,
    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
