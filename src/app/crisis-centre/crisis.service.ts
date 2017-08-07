import { Injectable } from '@angular/core';

import { Crisis } from './crisis';
import { CRISES } from './mock-crises';

@Injectable()
export class CrisisService {

  constructor() { }

  getCrises(): Promise<Crisis[]> {
    return this.getCrisesMock();
  }

  getCrisis(id: number | string): Promise<Crisis> {
    return this.getCrises()
      .then(crises => crises.find(crisis => crisis.id === +id));
  }

  getCrisesMock(): Promise<Crisis[]> {
    return Promise.resolve(CRISES);
  }

}
