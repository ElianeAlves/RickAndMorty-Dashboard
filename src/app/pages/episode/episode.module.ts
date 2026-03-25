import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodeRoutingModule } from './episode-routing.module';
import { EpisodeListComponent } from './pages/episode-list/episode-list.component';
import { CardEpisodeComponent } from '../../components/card-episode/card-episode.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EpisodeListComponent
  ],
  imports: [
    CommonModule,
    EpisodeRoutingModule,
    CardEpisodeComponent,
    ReactiveFormsModule
  ]
})
export class EpisodeModule { }
