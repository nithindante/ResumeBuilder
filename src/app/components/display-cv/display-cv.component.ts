import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { Details } from '../../details';
import { CommonModule } from '@angular/common';
import { EducationDetails } from '../../education-details';
import { WorkDetails } from '../../work-details';
@Component({
  selector: 'app-display-cv',
  imports: [CommonModule],
  templateUrl: './display-cv.component.html',
  styleUrl: './display-cv.component.scss'
})
export class DisplayCVComponent {

  workArr: Array<WorkDetails> = []

  constructor(private service: DataService) { }

  basicDetails: Details = {
    name: "",
    email: '',
    phone: 0,
  }

  edudetails: EducationDetails = {
    school: '',
    title: '',
    startdate: '',
    enddate: ''
  }

  workDetails: WorkDetails = {
    cname: '',
    title: '',
    startdate: '',
    enddate: '',
    responsibilities: ''
  }

  ngOnInit() {

    this.service.currentMessage.subscribe((res) => this.basicDetails = res)
    this.service.currentNewMessage.subscribe((res) => this.edudetails = res)
    this.service.currentWorkMessage.subscribe((res) => {
      if (Array.isArray(res) && res.length > 0) {
        this.workArr = res; // Replace workArr with the new entries
      }
    })
  }
}
