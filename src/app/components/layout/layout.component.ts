import { Component } from '@angular/core';
import { BasicInformationComponent } from "../basic-information/basic-information.component";
import { EducationaldetailsComponent } from "../educationaldetails/educationaldetails.component";
import { ProffesionaldetailsComponent } from "../proffesionaldetails/proffesionaldetails.component";
import { DisplayCVComponent } from "../display-cv/display-cv.component";

@Component({
  selector: 'app-layout',
  imports: [BasicInformationComponent, EducationaldetailsComponent, ProffesionaldetailsComponent, DisplayCVComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
