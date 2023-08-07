import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { events } from '../events/events';
import { ievents } from '../events/Ievents';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  events : ievents = {} as ievents;
  id: number = 0;

  constructor(private route: ActivatedRoute){

  }

  ngOnInit (): void{
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.events = events[this.id]
    });
  }
}
