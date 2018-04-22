import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { CharacterSummaryComponent } from './character-summary/character-summary.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Characters', component: CharacterSummaryComponent },
  { path: 'News', component: NewsComponent },
  { path: 'Characters/:id', component: CharacterDetailComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    CharacterSummaryComponent,
    CharacterDetailComponent,
    HomeComponent,
    FooterComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
