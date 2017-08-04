import { Injectable } from '@angular/core';

import { Crisis } from './crisis';
import { CRISES } from './mock-crises';

@Injectable()
export class CrisisService {

  constructor() { }

  getCrises(): Promise<Crisis[]> {
    return this.getCrisesMock();
  }

  getCrisesMock(): Promise<Crisis[]> {
    return Promise.resolve(CRISES);
  }

}
