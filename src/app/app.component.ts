import { Component } from '@angular/core';
import { SpeechService } from 'ngx-speech';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  constructor(
    public speech: SpeechService
  ) { }

  ngOnInit() {
    this.speech.start();
  }
}
