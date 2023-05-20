import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RateComponentComponent } from './components/rateSurveyCard/rateSurveyCard.component';
import { ThankyouCardComponent } from './components/thankyou-card/thankyou-card.component';

@NgModule({
  declarations: [
    AppComponent,
    RateComponentComponent,
    ThankyouCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
