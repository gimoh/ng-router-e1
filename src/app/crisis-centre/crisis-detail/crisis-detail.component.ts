import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'cm-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
  crisis: Crisis;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) { }

  ngOnInit() {
  }

  gotoCrises(): void {
    const crisisId = this.crisis ? this.crisis.id : null;
    // Pass along crisis id if available so that CrisisList component
    // can select that crisis.
    this.router.navigate(['../', { id: crisisId }], { relativeTo: this.route });
  }

}
