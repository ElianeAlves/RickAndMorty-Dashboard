import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../../../models/character.model';
import { CharacterService } from '../../services/character.service';
import { switchMap, forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.scss'
})
export class CharacterDetailsComponent implements OnInit {
  character: Character = {} as Character;
  otherCharacters: Character[] = [];

  constructor(
    private _characterService: CharacterService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.pipe(switchMap(({ id }) =>
      forkJoin({
        character: this._characterService.getCharacterById(id),
        characters: this._characterService.getCharacters()
      }).pipe(
        map(({ character, characters }) => ({
          character,
          otherCharacters: characters.results.filter((item: Character) => item.id != id)
        }))
      )
    )).subscribe(({ character, otherCharacters }) => {
      this.character = character;
      this.otherCharacters = otherCharacters;
    });
  }
}
