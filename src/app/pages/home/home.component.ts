import { LocationService } from './../../services/location.service';
import { EpisodeService } from './../../services/episode.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { RouterModule } from '@angular/router';
import { CardEpisodeComponent } from "../../components/card-episode/card-episode.component";
import { CardLocationComponent } from "../../components/card-location/card-location.component";
import { CharacterService } from '../character/services/character.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule, CardComponent, RouterModule, CardEpisodeComponent, CardLocationComponent],
})
export class HomeComponent implements OnInit {
  characters!: any[];
  location: any;
  episodes: any;
  infoCharacters: any;
  infoEpisodes: any;
  infoLocation: any;
  element!: number;
  totalCharacters: number = 0;
  totalEpisodes: number = 0;
  totalLocation: number = 0;

  constructor(
    private _characterService: CharacterService,
    private _episodeService: EpisodeService,
    private _locationService: LocationService,
  ) { }

  ngOnInit(): void {
    this._characterService.getCharacters().subscribe((res: any) => {
      if (res) {
        this.characters = res.results

        for (let index = 0; index < res.info.count; index++) {
          const element = index;
          setTimeout(() => {
            return this.totalCharacters = element
          }, 1000);
        }
      }
    })

    this._episodeService.getEpisodes().subscribe((res: any) => {
      if (res) {
        this.episodes = res.results

        for (let index = 0; index < res.info.count; index++) {
          const element = index;
          setTimeout(() => {
            return this.totalEpisodes = element
          }, 1000);
        }
      }
    })

    this._locationService.getLocation().subscribe((res: any) => {
      if (res) {
        this.location = res.results

        for (let index = 0; index < res.info.count; index++) {
          const element = index;
          setTimeout(() => {
            return this.totalLocation = element
          }, 1000);
        }
      }
    })
  }
}
