import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostAttiviComponent } from './post-attivi/post-attivi.component';
import { PostInattiviComponent } from './post-inattivi/post-inattivi.component';
import { PostComponent } from './post/post.component';
import { HighlightDirective } from './directive/highlight.directive';
import { UtentiComponent } from './utenti/utenti/utenti.component';
import { ComparsaUtentiDirective } from './directive/comparsa-utenti.directive';
import { UtentiDettagliComponent } from './utenti-dettagli/utenti-dettagli.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostAttiviComponent,
    PostInattiviComponent,
    PostComponent,
    HighlightDirective,
    UtentiComponent,
    ComparsaUtentiDirective,
    UtentiDettagliComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
