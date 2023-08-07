import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { alumnis } from './alumnis';
import { IAlumni } from './IAlumni';

@Component({
  selector: 'app-alumni-details',
  templateUrl: './alumni-details.component.html',
  styleUrls: ['./alumni-details.component.css']
})
export class AlumniDetailsComponent implements OnInit {

  alumni: IAlumni = {} as IAlumni;
  alumniId: number = 0;

  constructor(private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.alumniId = +params[`itemID`];
      this.alumni = this.findAlumni();
    });
  }


  findAlumni() {
    let id = this.alumniId;
    let foundAlumni = alumnis.find(function (element) {
      return element.id == id;
    });
    if (foundAlumni) return foundAlumni;
    else return {} as IAlumni;
  }
}