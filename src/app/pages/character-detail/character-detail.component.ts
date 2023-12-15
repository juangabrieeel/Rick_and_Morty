// /src/app/pages/character-detail/character-detail.component.ts
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
    const characterId = Number(this.route.snapshot.paramMap.get('id'));
    this.characterService.getCharacterById(characterId).subscribe((character) => {
      this.character = character;
    });
  }
}
