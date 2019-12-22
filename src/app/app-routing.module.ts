import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';


const routes: Routes = [
  //App default redirect page
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },

  //App set/default Layout: Dashboard layout
  {
    path: 'dashboard',
    component: DashboardComponent,
  },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
