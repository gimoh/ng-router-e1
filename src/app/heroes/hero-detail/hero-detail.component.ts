import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { slideInDownAnimation } from '../../animations';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'hr-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  animations: [ slideInDownAnimation ]
})
export class HeroDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    // note, if this component is never re-used (i.e. there is no way
    // to navigate to another hero from within this component, without
    // going through hero-list), this can be simplified to use a
    // snapshot of paramMap, without using the observable, like this:
    //
    //   const id = this.route.snapshot.paramMap.get('id');
    //   this.heroService.getHero(id).then(hero => this.hero = hero);
    //
    // using the observable has the upside that the component updates
    // automatically when paramMap changes
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe((hero: Hero) => this.hero = hero);
  }

  gotoHeroes(): void {
    const heroId = this.hero ? this.hero.id : null;
    // Pass along hero id if available
    // so that HeroList component can select that hero.
    // Include junk 'foo' property for fun.
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }

}
