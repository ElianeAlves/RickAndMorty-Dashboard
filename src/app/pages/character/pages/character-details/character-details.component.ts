import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../../../models/character.model';
import { CharacterService } from '../../services/character.service';

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
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(({ id }) => {
      this._characterService.getCharacterById(id).subscribe(res => this.character = res);
      this._characterService.getCharacters().subscribe(res =>
        this.otherCharacters = res.results.filter((item: Character) => item.id != id)
      );
    });
  }
}
