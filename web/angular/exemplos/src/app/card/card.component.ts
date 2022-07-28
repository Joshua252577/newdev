import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input () nameParam: string[] = [];
  @Input () bioParam: string = ''
  @Input () link1Param: string = '';
  @Input () link2Param: string = '';
  @Input () subtitleParam: string = '';

  color: string = '#000';

  showFruit: boolean = false;
  author: string = 'filipe';

  count = 0;

  addNameOnList: any;
  remove: any;

  list: string[] = [];

  constructor() {
    this.remove = (index: number) => {
      this.list.splice(index, 1);
    }

    this.addNameOnList = () => {
      this.list.push('Bruno');
      console.log('adicionou na lista: ', this.list);
    }
  }

  ngOnInit(): void {
    let nota =3;

    if (nota < 6) {
      this.color = 'red'
    } else if (nota === 6) {
      this.color = 'yellow'
    } else {
      this.color = 'green'
    }
    console.log('qaqackockekewfkofewokewfkoewfkop');
  }

}