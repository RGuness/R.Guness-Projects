import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { LeftSideOptionsComponent } from './left-side-options/left-side-options.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import {HttpClientModule} from '@angular/common/http' ;
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    LeftSideOptionsComponent,
    PopUpComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
