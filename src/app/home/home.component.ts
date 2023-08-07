import { Component, OnInit } from '@angular/core';
import { ICollaborator, Collaborator, collaborators } from './Collaborator';
import { events } from "../events/events";
import { ievents } from "../events/Ievents";
import { Istories } from '../stories/Istories';
import { stories } from '../stories/stories';
import { jobs, IJobs } from '../career/jobs';
import { alumnis } from "../alumni-details/alumnis";
import { IAlumni } from "../alumni-details/IAlumni";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  collaborators: Array<ICollaborator> = collaborators;
  events: Array<ievents> = events;
  stories: Array<Istories> = stories;
  jobs: Array<IJobs> = jobs;
  alumnis: Array<IAlumni> = alumnis;  

  formatGit(val: string) {
    return val.replace('https://', '');
  }
  formatInitial(val: string) {
    return val.charAt(val.length - 2);
  }
  // method for changing the image of collaborators to the one provided by alumni-details/alumnis
  setCollaboratorImageSrc() {
    for (let i = 0; i < this.collaborators.length; i++) {
      const collaboratorFirstName = this.collaborators[i].name.split(" ")[0];
      for (let j = 0; j < this.alumnis.length; j++) {
        const alumniFirstName = this.alumnis[j].name.split(" ")[0];
        if (collaboratorFirstName === alumniFirstName && this.alumnis[j].imageSrc !== '') {
          this.collaborators[i].imageSRC = this.alumnis[j].imageSrc;
          break;
        }
      }
    }
  }  
  ngOnInit() {
    this.setCollaboratorImageSrc();
  }  
}
