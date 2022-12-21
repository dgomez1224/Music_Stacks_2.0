import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SpotifyServiceService } from 'src/services/spotifyService.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../Login/Login.component';

@NgModule({
  declarations: [	
    AppComponent,
      LoginComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SpotifyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
