import { NgModule, } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BodyComponent} from '../app/body/body.component';
import {MovieListComponent} from '../app/movie-list/movie-list.component';
import {MovieDetailsComponent} from '../app/movie-details/movie-details.component';
import {LoginPageComponent} from '../app/login-page/login-page.component';
import {HomepageComponent} from '../app/homepage/homepage.component'
import {AuthGuard} from './auth.guard';


const routes: Routes = [

  {path: 'login', component: LoginPageComponent, pathMatch: 'full'},

  {path: 'home', component: HomepageComponent,canActivate: [AuthGuard],
    
  children: [
         {path: '', redirectTo: 'home', pathMatch: 'full'},
        {
          path: 'upcoming', children: [
            {path: '', component: MovieListComponent},
            // {
            //   path: ':id', children: [
            //     {path: '', component: MovieDetailsComponent},
            //   ]
            // }
          ]
        },
        {
          path: 'popular', children: [
            {path: '', component: MovieListComponent},
            // {
            //   path: ':id', children: [
            //     {path: '', component: MovieDetailsComponent},
            //   ]
            // }
          ]
        },
      ]

},

  {path: '', redirectTo: 'login', pathMatch: 'full'}
  
];
 


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
