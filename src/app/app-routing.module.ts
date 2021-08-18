import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageErrorComponent } from './components/page-error/page-error.component';
import { TroopDetailComponent } from './components/troop-detail/troop-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MonkeyDetailComponent } from './components/monkey-detail/monkey-detail.component';
import { MonkeyFormPageComponent } from './components/monkey-form-page/monkey-form-page.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {
    path: 'troops/:id',
    component: TroopDetailComponent,
  },
  // may need to do a nested route - id will be the child of both troops and monkeys
  { path: 'monkeys/:id', component: MonkeyDetailComponent },
  // { path: 'monkeys/:id', component: MonkeyFormPageComponent },
  { path: 'monkeys/:id/edit', component: MonkeyFormPageComponent },
  { path: 'monkeys/create', component: MonkeyFormPageComponent },
  { path: 'troops/:id/create-monkey', component: MonkeyFormPageComponent },
  
  
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: PageErrorComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
