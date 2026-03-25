import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { CharacterListComponent } from './pages/character-list/character-list.component';
import { CardComponent } from '../../components/card/card.component';

@NgModule({
  declarations: [
    CharacterDetailsComponent,
    CharacterListComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    CardComponent
  ]
})
export class CharacterModule { }
