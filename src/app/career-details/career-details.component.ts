import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { jobs, IJobs } from '../career/jobs';

@Component({
  selector: 'app-career-details',
  templateUrl: './career-details.component.html',
  styleUrls: ['./career-details.component.css']
})
export class CareerDetailsComponent implements OnInit {
  job : IJobs = {} as  IJobs;
  id: number = 0;

  constructor(private route : ActivatedRoute) {}



  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.job = jobs[this.id];
    
   } );
  }
}

