import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardExemplosComponent } from './card-exemplos/card-exemplos.component';

@NgModule({
  declarations: [
    AppComponent,
    CardExemplosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
