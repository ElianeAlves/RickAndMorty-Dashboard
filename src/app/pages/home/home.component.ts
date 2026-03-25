import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { RouterModule } from '@angular/router';
import { CardEpisodeComponent } from "../../components/card-episode/card-episode.component";
import { CardLocationComponent } from "../../components/card-location/card-location.component";
import { CharacterService } from '../character/services/character.service';
import { EpisodeService } from '../episode/services/episode.service';
import { LocationService } from '../location/services/location.service';
import { Character } from '../character/models/character.model';
import { Location } from '../location/models/location.model';
import { Episode } from '../episode/models/episode.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule, CardComponent, RouterModule, CardEpisodeComponent, CardLocationComponent],
})
export class HomeComponent implements OnInit {
  characters: Character[] = [];
  episodes: Episode[] = [];
  location: Location[] = [];
  totalLength: { total: number, label: string }[] = [];

  constructor(
    private _characterService: CharacterService,
    private _episodeService: EpisodeService,
    private _locationService: LocationService
  ) { }

  ngOnInit(): void {
    forkJoin({
      characters: this._characterService.getCharacters(),
      episodes: this._episodeService.getEpisodes(),
      location: this._locationService.getLocation()
    }).subscribe(({ characters, episodes, location }) => {
      this.characters = characters.results;
      this.episodes = episodes.results;
      this.location = location.results;

      this.totalLength = [
        { total: characters.info.count, label: 'Personagens' },
        { total: episodes.info.count, label: 'Episódios' },
        { total: location.info.count, label: 'Localizações' }
      ];
    });
  }
}
