import { Component, OnInit } from '@angular/core';
import { requireLogin } from '../core/config';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public showLogin: boolean = false;
  public showLoader: boolean = true;

  private delay: number = 1000;

  constructor() { }

  ngOnInit() {
    // delay login page view for 5 seconds, for testing only...
    setTimeout(() => {
      // hide loader
      this.showLoader = false;
      // show login form
      this.showLogin = true;
    }, this.delay);
  }

}
