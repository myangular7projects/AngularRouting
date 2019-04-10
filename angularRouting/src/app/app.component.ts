import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularRouting';

  homeRoute = "home";
  greetingsRoute = "greetings";

  routes = [
    {name: 'home', url: 'home'},
    {name: 'greetings', url: 'greetings'}
  ]
}
