import { Component, Input } from '@angular/core';
import { Location } from '../../pages/location/models/location.model';

@Component({
  selector: 'app-card-location',
  standalone: true,
  templateUrl: './card-location.component.html',
  styleUrl: './card-location.component.scss'
})
export class CardLocationComponent {
  @Input() item: Location = {} as Location;
}
