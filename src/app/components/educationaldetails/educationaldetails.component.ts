import { Component } from '@angular/core';
import { AbstractControl, Form, FormBuilder, FormsModule, NG_VALIDATORS, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerControl, MatDatepickerModule, MatDatepickerPanel } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';
import { DataService } from '../../data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
@Component({
  selector: 'app-educationaldetails',
  providers: [provideNativeDateAdapter()],
  imports: [FormsModule, MatDatepickerModule, MatInputModule, MatDatepickerModule, ReactiveFormsModule, CommonModule],
  templateUrl: './educationaldetails.component.html',
  styleUrl: './educationaldetails.component.scss'
})
export class EducationaldetailsComponent {

  profileForm: FormGroup | any;
  constructor(private service: DataService, private fb: FormBuilder) { }
  picker: MatDatepickerPanel<MatDatepickerControl<any>, any, any> | undefined;
  picker2?: MatDatepickerPanel<MatDatepickerControl<any>, any, any> | undefined

  onSubmit(profileForm: FormGroup) {
    if (profileForm.valid) {
      this.profileForm.value.startdate = ((JSON.stringify(this.profileForm.value.startdate)).split("T")[0]).replace(/"/g, '')
      this.profileForm.value.enddate = ((JSON.stringify(this.profileForm.value.enddate)).split("T")[0]).replace(/"/g, '')
      this.service.getBasicDetails(this.profileForm.value)
      this.profileForm.reset()
    }
  }
  ngOnInit() {
    this.profileForm = this.fb.group({
      school: ['', [Validators.required, Validators.minLength(3)]],
      title: ['', Validators.required],
      startdate: ['', Validators.required],
      enddate: ['', Validators.required]
    }, { validator: this.checkDates });

  }

  checkDates(control: AbstractControl): { [key: string]: boolean } | null {
    const startDay = ((JSON.stringify(control.value.startdate)).split("T")[0]).replace(/"/g, '')
    const endDay = ((JSON.stringify(control.value.enddate)).split("T")[0]).replace(/"/g, '')
    return startDay && endDay ? startDay < endDay ? null : { containAngular: true } : null
  }
}



