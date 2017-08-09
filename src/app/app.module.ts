import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { WindowRef } from './windowRef.service';
import { StripeComponent } from './stripe/stripe.component';
import { TwilioComponent } from './twilio/twilio.component';
@NgModule({
  declarations: [
    AppComponent,
    StripeComponent,
    TwilioComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [UserService, HttpModule, WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
