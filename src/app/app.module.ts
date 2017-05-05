import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeroesModule } from "./heroes/heroes.module";
import { AppComponent } from './app.component';

//Import routing Module 
import { AppRoutingModule } from "./app-routing.module";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
// import { HeroListComponent } from './hero-list/hero-list.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
// import { HeroeListComponent } from './heroes/heroe-list/heroe-list.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    // HeroListComponent,
    CrisisListComponent,
    // HeroeListComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeroesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
