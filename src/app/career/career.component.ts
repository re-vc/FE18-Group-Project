import { Component } from '@angular/core';
import { jobs, IJobs } from './jobs';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {
  jobs : Array<IJobs> = jobs;

}
