import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { events } from './events';
import { ievents } from './Ievents';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Array<ievents> = events;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = +params["id"];
    });
  }
}
