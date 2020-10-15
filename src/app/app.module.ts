import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterSummaryComponent } from './character-summary/character-summary.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { NewsComponent } from './news/news.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Characters', component: CharacterSummaryComponent },
  { path: 'News', component: NewsComponent },
  { path: 'Characters/:id', component: CharacterDetailComponent },
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
    NewsComponent,
    CharacterCardComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
