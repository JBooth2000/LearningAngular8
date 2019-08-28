import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// To import a componant you need to go back to the CLI and cd over to the foler and type ng g c NAMEOFCOMPONANT

// Need to import each componant Made
import { HomeComponent } from  './home/home.component';
import { ListComponent } from  './list/list.component';

// Needed to add page but you need to imort ythem first.
const routes: Routes = [
  { path: '', component: HomeComponent }, //The componant that has the path of Empty will load first Link the index Page.
  { path: 'list', component: ListComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
