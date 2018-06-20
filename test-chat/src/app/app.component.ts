import { Component } from '@angular/core';
import {Channel} from 'twilio-chat/lib/channel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private channel: Channel;

}
