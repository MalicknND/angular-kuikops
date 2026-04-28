import { Component, type OnInit } from '@angular/core';
import type { Produit } from '../model/produit.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produits',
  imports: [CommonModule],
  templateUrl: './produits.html',
  styleUrl: './produits.css',
})
export class Produits implements OnInit {
  produits: Produit[]; // un tableau de produits

  // un constructeur pour initialiser le tableau de produits avec des données fictives
  constructor() {
    this.produits = [
      {
        idProduit: 1,
        nomProduit: 'PC Asus',
        prixProduit: 3000.6,
        dateCreation: new Date('01/14/2011'),
      },
      {
        idProduit: 2,
        nomProduit: 'Imprimante Epson',
        prixProduit: 450,
        dateCreation: new Date('12/17/2010'),
      },
      {
        idProduit: 3,
        nomProduit: 'Tablette Samsung',
        prixProduit: 900.123,
        dateCreation: new Date('02/20/2020'),
      },
    ];
  }
  ngOnInit(): void {}
}
