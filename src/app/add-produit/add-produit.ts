import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProduitModel } from '../model/produit.model';
import { ProduitService } from '../services/produit';
import { CategorieModel } from '../model/categorie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  imports: [FormsModule],
  templateUrl: './add-produit.html',
})
export class AddProduitComponents implements OnInit {
  categories!: CategorieModel[]; // un tableau pour stocker les catégories disponibles
  newIdCat!: number;
  newCategorie!: CategorieModel;
  newProduit = new ProduitModel(); // un objet pour stocker les données du nouveau produit

  // un constructeur pour injecter le service ProduitService dans ce composant
  constructor(
    private produitService: ProduitService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    // this.categories = this.produitService.listeCategories(); // récupérer la liste des catégories à partir du service
  }

  addProduit() {
    this.produitService.ajouterProduit(this.newProduit).subscribe((prod) => {
      console.log(prod);
      this.router.navigate(['produits']);
    });
  }
}
