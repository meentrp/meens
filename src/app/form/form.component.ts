import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
formGroup
  constructor(private formBuild:FormBuilder) { 
    
  }

  ngOnInit() {
   this.formGroup = this.formBuild.group({
     FirstName:this.formBuild.control(''),lastName:[''],email:[''],age:['']
   })
  }
  onSubmit(form){
    console.log(form);
  }

}
