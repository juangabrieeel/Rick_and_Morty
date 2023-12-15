import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from '../../service/character.service';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'Proyecto Angular';
  characters: Character[] = [];

  constructor(private router: Router, private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((characters) => {
      this.characters = characters;
    });
  }

  navigateToCharacterDetail(characterId: number): void {
    this.router.navigate(['/character', characterId]);
  }
}
