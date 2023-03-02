
import { NgForExampleComponent } from './cards/cards.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { GilterPipe } from './gilter.pipe';


@NgModule({
  declarations: [

    AppComponent,

    NgForExampleComponent,
     GilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
