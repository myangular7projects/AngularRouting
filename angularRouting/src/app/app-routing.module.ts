import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WishingComponent } from './wishing/wishing.component';
import { HelloComponent } from './hello/hello.component';

const routes: Route[] = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'greetings', component: GreetingsComponent, children: [
    {path: '', redirectTo : 'hello', pathMatch: 'full'},
    {path: 'hello', component : HelloComponent},
    {path: 'wishing', component : WishingComponent},
    {path: '**', component : PageNotFoundComponent}
  ]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
