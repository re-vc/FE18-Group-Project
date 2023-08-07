import { Component } from '@angular/core';
import { Istories } from './Istories';
import { stories } from './stories';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent {
  stories: Array<Istories> = stories;

  public setShowMore(story: Istories): void {
    story.showMore = !story.showMore;
  }
 }
