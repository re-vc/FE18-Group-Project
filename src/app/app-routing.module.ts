import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumniDetailsComponent } from './alumni-details/alumni-details.component';
import { CareerDetailsComponent } from './career-details/career-details.component';
import { CareerComponent } from './career/career.component';
import { DirectoryComponent } from './directory/directory.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { events } from './events/events';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { StoriesComponent } from './stories/stories.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'career', component: CareerComponent },
  { path: 'directory', component: DirectoryComponent },
  { path: 'events', component: EventsComponent },
  { path: 'stories', component: StoriesComponent },
  { path: "directory/:itemID", component: AlumniDetailsComponent },
  {path: "event-detail/:id",component: EventDetailComponent},
  {path: "career-details/:id",component: CareerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
