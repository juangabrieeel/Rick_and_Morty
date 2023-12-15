// /src/app/components/location/location.component.ts
import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../service/location.service';
import { Location } from '../../models/location.model';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  locations: Location[] = [];

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.locationService.getLocations().subscribe((locations) => {
      this.locations = locations;
    });
  }
}
