import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  days = ['Monday', 'Tuesday', 'Wednesday'];//, 'Thursday', 'Friday', 'Saturday', 'Sunday'];
}
