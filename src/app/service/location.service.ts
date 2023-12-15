import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Location } from '../models/location.model';

@Injectable({
    providedIn: 'root',
})
export class LocationService {
    private apiUrl = 'https://rickandmortyapi.com/api/location';

    constructor(private http: HttpClient) { }

    getLocations(): Observable<Location[]> {
        return this.http.get<any>(this.apiUrl).pipe(
            map((data) => {
                return data.results.map((locationData: any) => new Location(locationData));
            })
        );
    }
}
