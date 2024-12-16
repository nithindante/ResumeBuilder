import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../data.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-information',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './basic-information.component.html',
  styleUrl: './basic-information.component.scss'
})
export class BasicInformationComponent {

  onSubmit() {
    if (this.profileForm.valid) {
      this.service.getDetails(this.profileForm.value)
      this.profileForm.reset()
    }
  }

  constructor(private service: DataService) { }

  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl()
  })
}
