import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit {

  routes = [
    {name: 'hello', url: 'hello'},
    {name: 'wishing', url: 'wishing'}
  ]

  constructor() { }

  ngOnInit() {
  }


}
