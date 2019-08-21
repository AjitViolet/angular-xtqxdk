import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SpeechService } from 'ngx-speech';
import { SpeechModule } from 'ngx-speech';

@NgModule({
  imports:      [ BrowserModule, FormsModule,SpeechModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
