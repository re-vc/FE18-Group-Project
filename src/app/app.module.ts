import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { EventsComponent } from './events/events.component';
import { DirectoryComponent } from './directory/directory.component';
import { StoriesComponent } from './stories/stories.component';
import { CareerComponent } from './career/career.component';
import { AlumniDetailsComponent } from './alumni-details/alumni-details.component';
import { DividerComponent } from './divider/divider.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { CareerDetailsComponent } from './career-details/career-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    EventsComponent,
    DirectoryComponent,
    StoriesComponent,
    CareerComponent,
    AlumniDetailsComponent,
    DividerComponent,
    EventDetailComponent,
    CareerDetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
