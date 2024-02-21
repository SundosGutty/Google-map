import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemPageComponent } from './pages/item-page/item-page.component';
import { ItemEditComponent } from './pages/item-edit/item-edit.component';

const routes: Routes = [
  { path: 'item/edit/:name', component: ItemEditComponent },
  { path: '', component: ItemPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
