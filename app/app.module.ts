// Core modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Ng-Bootstrap modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Component list
import { AppComponent }  from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MyCarouselComponent } from './my-carousel/my-carousel.component';

@NgModule({
  imports:      [ BrowserModule, NgbModule.forRoot() ],
  declarations: [ AppComponent, LandingComponent, NavigationComponent, MyCarouselComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
