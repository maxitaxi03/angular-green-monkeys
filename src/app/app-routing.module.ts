import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TroopComponent } from './components/troop/troop.component';
import { MonkeyComponent } from './components/monkey/monkey.component';
import { MonkeyFormComponent } from './components/monkey-form/monkey-form.component';
import { PageErrorComponent } from './components/page-error/page-error.component';

const routes: Routes = [
  {
    path: 'troops/:id',
    component: TroopComponent,
    children: [
      {
        path: 'monkeys',
        component: MonkeyComponent,
      },
    ],

    // troops/troopid/monkeys/monkeyid/monkeyedit
  },
  // may need to do a nested route - id will be the child of both troops and monkeys
  { path: 'monkeys/:id', component: MonkeyComponent },
  {path: '', redirectTo: '/troops/:id', pathMatch: 'full'},
  { path: '**', component: PageErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
