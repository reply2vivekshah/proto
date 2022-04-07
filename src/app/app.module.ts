import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfigurePartnerProfileComponent } from './pages/configure-partner-profile/configure-partner-profile.component';
import { ConfigureCommissionPlanComponent } from './pages/configure-commission-plan/configure-commission-plan.component';
import { ConfigureProductGroupComponent } from './pages/configure-product-group/configure-product-group.component';
import { ConfigureCommissionPolicyComponent } from './pages/configure-commission-policy/configure-commission-policy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'pprofile', component: ConfigurePartnerProfileComponent },
  { path: 'cplan', component: ConfigureCommissionPlanComponent },
  { path: 'pg', component: ConfigureProductGroupComponent },
  { path: 'cpolicy', component: ConfigureCommissionPolicyComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ConfigurePartnerProfileComponent,
    ConfigureCommissionPlanComponent,
    ConfigureProductGroupComponent,
    ConfigureCommissionPolicyComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
