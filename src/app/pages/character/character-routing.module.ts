import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './pages/character-list/character-list.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterListComponent
  },
  {
    path: ':id',
    component: CharacterDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
