import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";

//Import rxjs
import "rxjs/add/operator/switchMap";

//Import hero services 
import { HeroService } from "../hero.service";


@Component({
  selector: 'app-hero-detail',
  template: '<h1>Hero Detail component</h1>',
 })
export class HeroDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service : HeroService
  ) { }

  ngOnInit() {
  }

}
