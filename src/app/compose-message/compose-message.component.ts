import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { slideInDownAnimation } from '../animations';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.css'],
  animations: [ slideInDownAnimation ]
})
export class ComposeMessageComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  details: string;
  sending = false;

  constructor(private router: Router) { }

  send(): void {
    this.sending = true;
    this.details = 'Sending Message...';

    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    }, 1000);
  }

  cancel(): void {
    this.closePopup();
  }

  closePopup(): void {
    // Providing a `null` value to the named outlet clears its contents
    this.router.navigate([{ outlets: { popup: null }}]);
  }

  ngOnInit() {
  }

}
