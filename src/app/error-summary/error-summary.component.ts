import { Component, OnInit,Input ,Self} from '@angular/core';
import { AbstractControl, ControlContainer, FormArray, FormGroup, FormGroupDirective, NgForm,NgControl } from '@angular/forms';


@Component({
  selector: 'error-summary',
  templateUrl: './error-summary.component.html',
  styleUrls: ['./error-summary.component.css']
})
export class ErrorSummaryComponent  {

  @Input() control:string;

  @Input() visible:any;
  
  constructor(private controlContainer: ControlContainer) { }

  get form():FormGroup {
    return this.controlContainer.control  as FormGroup;
  }

  get formControl() :AbstractControl{
    return this.form.get(this.control) as AbstractControl;
  }

  get isNotValid() {
    return this.formControl.invalid && (this.formControl.touched || this.formControl.dirty)
  }
  
}