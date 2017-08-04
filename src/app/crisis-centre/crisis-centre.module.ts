import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisCentreRoutingModule } from './crisis-centre-routing.module';
import { CrisisService } from './crisis.service';
import { CrisisCentreComponent } from './crisis-centre.component';
import { HomeComponent } from './home/home.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';

@NgModule({
  imports: [
    CommonModule,
    CrisisCentreRoutingModule
  ],
  declarations: [CrisisCentreComponent, HomeComponent, CrisisListComponent, CrisisDetailComponent],
  providers: [CrisisService]
})
export class CrisisCentreModule { }
