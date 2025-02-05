import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-section-g',
  templateUrl: './main-section-g.component.html',
  styleUrls: ['./main-section-g.component.scss']
})
export class MainSectionGComponent implements OnInit,OnDestroy{
  emailFormControl = new FormControl('',[Validators.required,
    Validators.email ])
  buttonClick (){
    this.emailFormControl.markAllAsTouched();
  }
  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
    
  }
}
