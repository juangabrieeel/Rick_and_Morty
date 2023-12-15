import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Episode } from '../models/episode.model';

@Injectable({
    providedIn: 'root',
})
export class EpisodeService {
    private apiUrl = 'https://rickandmortyapi.com/api/episode';

    constructor(private http: HttpClient) { }

    getEpisodes(): Observable<Episode[]> {
        return this.http.get<any>(this.apiUrl).pipe(
            map((data) => {
                return data.results.map((episodeData: any) => new Episode(episodeData));
            })
        );
    }
}
