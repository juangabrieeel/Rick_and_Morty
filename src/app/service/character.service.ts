import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class CharacterService {
    private apiUrl = 'https://rickandmortyapi.com/api/character';

    constructor(private http: HttpClient) { }

    getCharacters(): Observable<Character[]> {
        return this.http.get<any>(this.apiUrl).pipe(
            map((data) => {
                return data.results.map((characterData: any) => new Character(characterData));
            })
        );
    }

    getCharacter(characterId: number): Observable<Character> {
        const url = `${this.apiUrl}/${characterId}`;
        return this.http.get<Character>(url);
    }
}
