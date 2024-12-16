import { Component, inject, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormsModule, NgForm, Validators, FormGroup, ValidatorFn, ValidationErrors } from '@angular/forms';
import { MatDatepickerControl, MatDatepickerModule, MatDatepickerPanel } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../data.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-proffesionaldetails',
  providers: [provideNativeDateAdapter()],
  imports: [FormsModule, MatDatepickerModule, MatInputModule, MatDatepickerModule, ReactiveFormsModule, CommonModule],
  templateUrl: './proffesionaldetails.component.html',
  styleUrl: './proffesionaldetails.component.scss'
})
export class ProffesionaldetailsComponent {
  editDiv() {
    this.visibleOrNot = true;
  }
  cancel(item: any) {
    this.visibleOrNot = false;
    this.workdetails.removeAt(item)
  }
  picker?: MatDatepickerPanel<MatDatepickerControl<any>, any, any>
  picker2?: MatDatepickerPanel<MatDatepickerControl<any>, any, any>
  buttonType: any;
  constructor(private service: DataService, private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      workdetails: this.fb.array([])
    })
  }
  profileForm!: FormGroup;
  visibleOrNot: boolean = false
  get workdetails(): FormArray {
    return this.profileForm.get('workdetails') as FormArray
  }

  newName(): FormGroup {
    return this.fb.group({
      cname: ['', Validators.required],
      title: ['', Validators.required],
      startdate: ['', Validators.required],
      enddate: ['', Validators.required],
      responsibilities: ['', Validators.required]
    }, { validator: this.checkDates })
  }

  onSubmit(type: any) {
    if (type === 'add') {
      this.visibleOrNot = true;
      this.workdetails.push(this.newName())
    }
    else if (type === 'submit') {
      const formattedWorkDetails = this.profileForm.value.workdetails.map((element: any) => ({
        ...element,
        startdate: ((JSON.stringify(element.startdate)).split("T")[0]).replace(/"/g, ''),
        enddate: ((JSON.stringify(element.enddate)).split("T")[0]).replace(/"/g, ''),
      }));
      this.service.getWorkDetails(formattedWorkDetails); // Send the entire array at once
      this.visibleOrNot = false;
    }
    else if (type === 'cancel') {
      this.profileForm.reset()
      this.visibleOrNot = false;
      this.workdetails.removeAt(0)
    }
  }
  checkDates(control: AbstractControl): { [key: string]: boolean } | null {
    const startDay = ((JSON.stringify(control.value.startdate)).split("T")[0]).replace(/"/g, '')
    const endDay = ((JSON.stringify(control.value.enddate)).split("T")[0]).replace(/"/g, '')
    return startDay && endDay ? startDay < endDay ? null : { containAngular: true } : null
  }


}
