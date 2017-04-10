import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { FrontpageComponent } from './frontpage/frontpage.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: LandingComponent },
      { path: 'frontpage', component: FrontpageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
