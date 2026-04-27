import { Component, type OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  imports: [FormsModule],
  templateUrl: './binding.html',
  styles: ``,
})
export class Binding implements OnInit {
  titre: string = 'Demo du data binding interpolation';
  status: boolean = false;
  nom: string = 'John Doe';
  constructor() {}

  ChangerTitre() {
    this.titre = 'Titre changé';
  }

  ngOnInit(): void {}
}
