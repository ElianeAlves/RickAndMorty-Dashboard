import { CharacterService } from '../character/services/character.service';
import { EpisodeService } from './../../services/episode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrl: './episode-list.component.scss'
})
export class EpisodeListComponent implements OnInit {
  episodes: any;
  info: any;

  constructor(
    private episodeService: EpisodeService,
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.episodeService.getEpisodes().subscribe((res: any) => {
      this.info = res.info
      this.episodes = res.results
    });
  }

  proxima(): void {
    if (this.info.next) {
      this.characterService.getNextPage(this.info.next).subscribe((res: any) => {
        this.info = res.info;
        this.episodes = res.results;
        window.scrollTo(0, 0);
      });
    }
  }

  anterior(): void {
    if (this.info.prev) {
      this.characterService.getPreviousPage(this.info.prev).subscribe((res: any) => {
        this.info = res.info;
        this.episodes = res.results;
        window.scrollTo(0, 0);
      });
    }
  }
}
