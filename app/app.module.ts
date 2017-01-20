import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Ng-Bootstrap modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports:      [ BrowserModule, NgbModule.forRoot() ],
  declarations: [ AppComponent, LandingComponent, NavigationComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
