import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MusicEventComponent } from './music-event/music-event.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'events', component: MusicEventComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  { path: '', redirectTo: 'events', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    MusicEventComponent,
    LoginComponent,
    SignupComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
