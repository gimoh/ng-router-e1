import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CrisisService } from '../crisis.service';
import { Crisis } from '../crisis';

@Component({
  selector: 'cm-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {
  crises: Observable<Crisis[]>;

  private selectedId: number;

  constructor(
    private service: CrisisService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  onSelect(crisis: Crisis): void {
    this.selectedId = crisis.id;

    // Navigate with a relative link
    this.router.navigate([crisis.id], { relativeTo: this.route });
  }

  isSelected(crisis: Crisis): boolean {
    return crisis.id === this.selectedId;
  }

  ngOnInit() {
    this.crises = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns string into a number
        this.selectedId = +params.get('id');
        return this.service.getCrises();
      });
  }

}
