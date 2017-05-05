import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from "@angular/router";

import { HeroListComponent } from "./heroe-list.component";
import { HeroDetailComponent } from "./hero-detail.component";

const heroesRoutes : Routes = [
  { path: "heroes", component: HeroListComponent},
  { path: "hero/:id", component: HeroDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports : [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
