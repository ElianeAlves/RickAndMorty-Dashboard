import { Component, Input } from '@angular/core';
import { Episode } from '../../pages/episode/models/episode.model';

@Component({
  selector: 'app-card-episode',
  standalone: true,
  templateUrl: './card-episode.component.html',
  styleUrl: './card-episode.component.scss'
})
export class CardEpisodeComponent {
  @Input() item: Episode = {} as Episode;
}
