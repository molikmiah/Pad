import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { requireLogin } from '../core/config';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public showLogin: boolean = false;
  public showLoader: boolean = true;
  public showAuthError: boolean = false;

  @Input() password;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // on view init, show loader
    this.load(750, () => {
      this.showLogin = true;
    });
  }

  public login() {
    this.load(300, () => {
      // fake auth password, for testing...
      if (this.password !== 'Password01') {
        // show auth error
        this.showAuthError = true;
        return false;
      }
      else {
        // hide auth error
        this.showAuthError = false;

        // transition to frontpage
        this.router.navigate(['frontpage'], { relativeTo: this.route });
      }
    });
  }

  private load(delay?: number, cb?) {
    // set default delay
    if (!delay) {
      delay = 750;
    }

    // show loader
    this.showLoader = true;

    // hide loader after delay
    setTimeout(() => {
      // hide
      this.showLoader = false;

      // run callback
      if (typeof cb === 'function') {
        cb();
      }
    }, delay);
  }

}
