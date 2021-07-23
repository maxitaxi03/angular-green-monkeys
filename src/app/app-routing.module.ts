import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TroopComponent } from './components/troop/troop.component';
import { MonkeyComponent } from './components/monkey/monkey.component';
import { MonkeyFormComponent } from './components/monkey-form/monkey-form.component';

const routes: Routes = [
  {
    path: 'troops',
    component: TroopComponent,
    children: [
      {
        path: 'id',
        component: TroopComponent,

        children: [
          {
            path: 'monkeys',
            component: MonkeyComponent,
            children: [{ path: 'id', component: MonkeyFormComponent }],
          },
        ],
      },
    ],
  },
  // may need to do a nested route - id will be the child of both troops and monkeys
  { path: 'monkeys', component: MonkeyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
