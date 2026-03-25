import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationListComponent } from './pages/location-list/location-list.component';
import { CardLocationComponent } from '../../components/card-location/card-location.component';

@NgModule({
  declarations: [LocationListComponent],
  imports: [
    CommonModule,
    LocationRoutingModule,
    CardLocationComponent
  ]
})
export class LocationModule { }
