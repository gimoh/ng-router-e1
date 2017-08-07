import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  sessionId: Observable<string>;
  token: Observable<string>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Capture the session ID if available
    this.sessionId = this.route.queryParamMap
      .map(params => params.get('sessionId') || 'None');

    // Capture the fragment if available
    this.token = this.route.fragment
      .map(fragment => fragment || 'None');
  }

}