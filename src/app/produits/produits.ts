import { Component, OnInit } from '@angular/core';
import { ProduitModel } from '../model/produit.model';
import { CommonModule } from '@angular/common';
import { ProduitService } from '../services/produit';

@Component({
  selector: 'app-produits',
  imports: [CommonModule],
  templateUrl: './produits.html',
  styleUrl: './produits.css',
})
export class ProduitsComponents implements OnInit {
  produits: ProduitModel[]; // un tableau de produits

  // un constructeur pour initialiser le tableau de produits avec des données fictives
  // avec l'injection du service ProduitService on a une seule instance de ce service pour toute l'application, donc on peut partager les données entre les composants
  constructor(private produitService: ProduitService) {
    this.produits = []; // initialiser le tableau de produits avec des données fictives
  }
  ngOnInit(): void {
    this.produits = this.produitService.listeProduits();
  }
}
