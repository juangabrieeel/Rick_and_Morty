// /src/app/pages/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../service/character.service';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  characters: Character[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((characters) => {
      this.characters = characters;
    });
  }
}
