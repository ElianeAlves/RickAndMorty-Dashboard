import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { Info } from '../../../../models/info.model';
import { Location } from '../../models/location.model';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrl: './location-list.component.scss'
})
export class LocationListComponent implements OnInit {
  info: Info = {} as Info;
  location: Location[] = [];

  constructor(private _locationService: LocationService) { }

  ngOnInit(): void {
    this._locationService.getLocation().subscribe(({ info, results }) => {
      this.info = info;
      this.location = results;
    });
  }

  proxima(): void {
    if (this.info.next) {
      this._locationService.getNextPage(this.info.next).subscribe(({ info, results }) => {
        this.info = info;
        this.location = results;
        window.scrollTo(0, 0);
      });
    }
  }

  anterior(): void {
    if (this.info.prev) {
      this._locationService.getPreviousPage(this.info.prev).subscribe(({ info, results }) => {
        this.info = info;
        this.location = results;
        window.scrollTo(0, 0);
      });
    }
  }
}
