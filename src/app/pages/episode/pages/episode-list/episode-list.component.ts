import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../../services/episode.service';
import { Episode } from '../../models/episode.model';
import { Info } from '../../../../models/info.model';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrl: './episode-list.component.scss'
})
export class EpisodeListComponent implements OnInit {
  episodes: Episode[] = [];
  info: Info = {} as Info;

  constructor(private _episodeService: EpisodeService) { }

  ngOnInit(): void {
    this._episodeService.getEpisodes().subscribe(({ info, results }) => {
      this.info = info;
      this.episodes = results;
    });
  }

  proxima(): void {
    if (this.info.next) {
      this._episodeService.getNextPage(this.info.next).subscribe(({ info, results }) => {
        this.info = info;
        this.episodes = results;
        window.scrollTo(0, 0);
      });
    }
  }

  anterior(): void {
    if (this.info.prev) {
      this._episodeService.getPreviousPage(this.info.prev).subscribe(({ info, results }) => {
        this.info = info;
        this.episodes = results;
        window.scrollTo(0, 0);
      });
    }
  }
}
