import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input () bioParam: string = '';
  @Input () linkGoogleParam: string = '';
  @Input () linkYoutubeParam: string = '';
  @Input () subtitleParam: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
