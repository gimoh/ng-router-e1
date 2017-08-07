import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot
} from '@angular/router';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Injectable()
export class CrisisDetailResolverService implements Resolve<Crisis> {

  constructor(private cs: CrisisService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Crisis> {
    const id = route.paramMap.get('id');

    return this.cs.getCrisis(id).then(crisis => {
      if (crisis) {
        return crisis;
      }
      this.router.navigate(['/crisis-centre']);
      return null;
    });
  }

}
