import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fullName: string[] = ['Bruno', 'Julia'];
  bio: string = 'lorem ipsum dolor sit amet, consectetur adipiscing el'
  link1: string = 'https://google.com';
  link2: string = 'https://youtube.com'
  subtitle: string = 'Subtitulo'
  list: string[] = ['aaa','bbb'];

  char: string = 'Caju'
}
