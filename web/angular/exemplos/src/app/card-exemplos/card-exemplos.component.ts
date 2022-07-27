import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-exemplos',
  templateUrl: './card-exemplos.component.html',
  styleUrls: ['./card-exemplos.component.css']
})
export class CardExemplosComponent implements OnInit {
  fullName: string = 'Matheus'
  bio: string = 'lorem ipsum dolor sit amet, consectetur adipiscing'
  students:string[]=['Bruno','Matheus']

  constructor() { }

  ngOnInit(): void {
  }

}
