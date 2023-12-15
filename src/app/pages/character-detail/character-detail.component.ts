import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../service/character.service';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
})
export class CharacterDetailComponent implements OnInit {
  character: Character | undefined;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const characterId = Number(params.get('id'));
      if (!isNaN(characterId)) {
        this.characterService.getCharacter(characterId).subscribe((character) => {
          this.character = character;
        });
      }
    });
  }
}
