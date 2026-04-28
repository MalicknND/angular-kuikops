import { Component } from '@angular/core';

@Component({
  selector: 'app-produits',
  imports: [],
  templateUrl: './produits.html',
  styleUrl: './produits.css',
})
export class Produits {
  produits: string[];

  constructor() {
    this.produits = ['Produit 1', 'Produit 2', 'Produit 3'];
  }
}
