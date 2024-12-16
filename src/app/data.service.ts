import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Details } from './details';
import { EducationDetails } from './education-details';
import { WorkDetails } from './work-details';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  detail: Details = {
    name: '',
    email: '',
    phone: 0,
  }

  edudetails: EducationDetails = {
    school: '',
    title: "",
    startdate: "",
    enddate: ""
  }

  workdetails: WorkDetails = {
    cname: '',
    title: '',
    startdate: "",
    enddate: '',
    responsibilities: ''
  }
  private messageSource = new BehaviorSubject<any>(this.detail);
  currentMessage = this.messageSource.asObservable();

  private newmessage = new BehaviorSubject<any>(this.edudetails);
  currentNewMessage = this.newmessage.asObservable();

  private workMessage = new BehaviorSubject<any>(this.workdetails)
  currentWorkMessage = this.workMessage.asObservable();

  constructor() { }

  getDetails(items: any) {
    this.messageSource.next(items)
  }

  getBasicDetails(items: any) {
    this.newmessage.next(items)
  }

  getWorkDetails(items: any) {
    this.workMessage.next(items); // Emit the updated array
  }
}
