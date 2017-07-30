import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Observable<Hero[]>;

  private selectedId: number;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  onSelect(hero: Hero): void {
    this.router.navigate(['/hero', hero.id]);
  }

  isSelected(hero: Hero): boolean {
    return hero.id === this.selectedId;
  }

  ngOnInit() {
    this.heroes = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns string into a number
        this.selectedId = +params.get('id');
        return this.heroService.getHeroes();
      });
  }

}
