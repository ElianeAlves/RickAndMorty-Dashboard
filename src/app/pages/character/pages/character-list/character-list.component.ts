import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  data: any[] = [];
  info: any = {
    next: '',
    prev: ''
  };

  constructor(private _characterService: CharacterService) { }

  ngOnInit(): void {
    this._characterService.getCharacters().subscribe((res: any) => {
      this.info = res.info;
      this.data = res.results;
    });
  }

  teste(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;
    this._characterService.getCharactersByName(inputValue).subscribe((res: any) => {
      this.data = res.results
    })
  }

  proxima(): void {
    if (this.info.next) {
      this._characterService.getNextPage(this.info.next).subscribe((res: any) => {
        this.info = res.info;
        this.data = res.results;
        window.scrollTo(0, 0);
      });
    }
  }

  anterior(): void {
    if (this.info.prev) {
      this._characterService.getPreviousPage(this.info.prev).subscribe((res: any) => {
        this.info = res.info;
        this.data = res.results;
        window.scrollTo(0, 0);
      });
    }
  }
}
