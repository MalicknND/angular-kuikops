import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  imports: [],
  templateUrl: './binding.html',
  styles: ``,
})
export class Binding implements OnInit {
  titre: string = 'Demo du data binding interpolation';
  status: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
