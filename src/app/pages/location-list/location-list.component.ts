import { CharacterService } from '../character/services/character.service';
import { LocationService } from './../../services/location.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrl: './location-list.component.scss'
})
export class LocationListComponent implements OnInit {
  location: any;
  info: any;

  constructor(
    private _characterService: CharacterService,
    private _locationService: LocationService,
  ) { }

  ngOnInit(): void {
    this._locationService.getLocation().subscribe(res => {
      this.info = res.info;
      this.location = res.results;
    });
  }

  proxima(): void {
    if (this.info.next) {
      this._characterService.getNextPage(this.info.next).subscribe((res: any) => {
        this.info = res.info;
        this.location = res.results;
        window.scrollTo(0, 0);
      });
    }
  }

  anterior(): void {
    if (this.info.prev) {
      this._characterService.getPreviousPage(this.info.prev).subscribe((res: any) => {
        this.info = res.info;
        this.location = res.results;
        window.scrollTo(0, 0);
      });
    }
  }
}
