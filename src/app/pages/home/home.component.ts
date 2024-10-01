import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from '../../service/character.service';
import { Character } from '../../models/character.model';

export enum SortCriteria {
  Name = 'name',
  Species = 'species',
  Status = 'status'
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'Proyecto en Angular';
  characters: Character[] = [];
  searchTerm: string = '';
  sortCriteria: SortCriteria = SortCriteria.Name; // Usar Enum aquí
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 0;

  constructor(private router: Router, private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((characters) => {
      this.characters = characters;
      this.totalPages = Math.ceil(this.characters.length / this.pageSize);
    });
  }

  get sortedCharacters(): Character[] {
    // Filtrar personajes según el término de búsqueda
    const filteredCharacters = this.characters.filter(character =>
      character.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    // Ordenar personajes según el criterio de ordenación
    return filteredCharacters.sort((a, b) => {
      // Usar 'keyof Character' para asegurar que el acceso sea seguro
      const aValue = a[this.sortCriteria as keyof Character];
      const bValue = b[this.sortCriteria as keyof Character];

      // Asegurarse de que ambos valores son cadenas para la comparación
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return aValue.localeCompare(bValue);
      }
      return 0; // Retornar 0 si no son comparables
    });
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
