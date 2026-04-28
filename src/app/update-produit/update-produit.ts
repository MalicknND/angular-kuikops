import { Component, OnInit } from '@angular/core';
import { ProduitModel } from '../model/produit.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/produit';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import type { CategorieModel } from '../model/categorie.model';

@Component({
  selector: 'app-update-produit',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-produit.html',
  styles: ``,
})
export class UpdateProduitComponent implements OnInit {
  currentProduit = new ProduitModel(); // un objet pour stocker les données du produit à modifier
  categories!: CategorieModel[]; // un tableau pour stocker les catégories disponibles
  updatedCatId!: number; // une variable pour stocker l'id de la catégorie sélectionnée

  constructor(
    private activatedRoute: ActivatedRoute, // un objet pour récupérer les paramètres de l'URL
    private router: Router, // un objet pour naviguer vers une autre page
    private produitService: ProduitService,
  ) {}

  ngOnInit(): void {
    // récupérer l'id du produit à modifier à partir de l'URL
    this.categories = this.produitService.listeCategories(); // récupérer la liste des catégories à partir du service
    this.currentProduit = this.produitService.consulterProduit(
      this.activatedRoute.snapshot.params['id'],
    );
    this.updatedCatId = this.currentProduit.categorie.idCat; // affecter l'id de la catégorie du produit à modifier à la variable updatedCatId
  }

  updateProduit() {
    this.currentProduit.categorie = this.produitService.consulterCategorie(this.updatedCatId); // récupérer la catégorie sélectionnée à partir du service et l'affecter au produit à modifier
    this.produitService.updaterProduit(this.currentProduit); // modifier le produit dans le service
    this.router.navigate(['produits']); // naviguer vers la page des produits
  }
}
