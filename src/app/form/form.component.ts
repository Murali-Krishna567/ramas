import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  data:any;

    submitted = false;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    
  }
  registerForm = this.fb.group({
    firstName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required,Validators.pattern('^[0-9]+$')]],
    lastName: ['', Validators.required],
     
});

get f() { return this.registerForm.controls; }

// onSubmit() {
//     this.submitted = true;
//     if (this.registerForm.invalid) {
//         return;
//     }
//     console.log(this.registerForm.value)
//     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
// }

onReset() {
    this.submitted = false;
    this.registerForm.reset();
  
   }

   onsubmit():void{
    this.submitted =true;
   this.data=this.registerForm.value;
          console.log(this.registerForm.value)
       }
}