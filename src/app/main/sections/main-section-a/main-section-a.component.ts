import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-section-a',
  templateUrl: './main-section-a.component.html',
  styleUrls: ['./main-section-a.component.scss']
})
export class MainSectionAComponent implements OnInit,OnDestroy{
emailFormControl = new FormControl('',[Validators.required,
Validators.email ])
ngOnInit(): void {
  
}
buttonClick(){
  this.emailFormControl.markAllAsTouched();
  console.log(
    this.emailFormControl.value
  )
}
ngOnDestroy(): void {
  
}
}
