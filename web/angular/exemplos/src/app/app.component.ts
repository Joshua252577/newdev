import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fullName: string = 'Matheus'
  linkGoogle: string = 'http://google.com'
  linkYoutube: string = 'http://youtube.com'
  bio: string = ' lorem ipsum dolor sit amet, consectetur adipiscing'
  subtitle: string = 'subtitle'
}
