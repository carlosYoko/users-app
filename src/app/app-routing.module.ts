import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersListComponent } from './dashboard/users-list/users-list.component';
import { UserComponent } from './dashboard/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'layout', pathMatch: 'full' },
  { path: 'layout', component: LayoutComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: '', component: UsersListComponent },
      { path: 'user/:id', component: UserComponent },
    ]
  },
  { path: '**', redirectTo: 'layout', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
