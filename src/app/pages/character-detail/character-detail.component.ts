import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../../models/character.model';
import { CharacterService } from '../../service/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  character: Character | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const characterId = Number(params.get('id'));
      if (characterId) {
        this.characterService.getCharacter(characterId).subscribe(character => {
          this.character = character;
        });
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }
}
