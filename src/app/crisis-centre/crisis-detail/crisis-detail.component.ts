import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Crisis } from '../crisis';
import { DialogService } from '../../dialog.service';
import { slideInDownAnimation } from "../../animations";

@Component({
  selector: 'cm-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css'],
  animations: [ slideInDownAnimation ]
})
export class CrisisDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  editName: string;
  crisis: Crisis;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { crisis: Crisis }) => {
        this.editName = data.crisis.name;
        this.crisis = data.crisis;
      });
  }

  canDeactivate(): Promise<boolean> | boolean {
    // Allow syncronous navigation (`true`) if no crisis or the crisis
    // is unchanged
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }

    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }

  cancel(): void {
    this.gotoCrises();
  }

  save(): void {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  gotoCrises(): void {
    const crisisId = this.crisis ? this.crisis.id : null;
    // Pass along crisis id if available so that CrisisList component
    // can select that crisis.
    this.router.navigate(['../', { id: crisisId }], { relativeTo: this.route });
  }

}
