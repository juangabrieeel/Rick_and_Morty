// /src/app/services/character.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from '../models/character.model';

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

    getCharacterById(id: number): Observable<Character | undefined> {
        return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
            map((data) => {
                return data ? new Character(data) : undefined;
            })
        );
    }
}
