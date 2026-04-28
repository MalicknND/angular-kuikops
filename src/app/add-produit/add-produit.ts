import { Component, type OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProduitModel } from '../model/produit.model';
import { ProduitService } from '../services/produit';

@Component({
  selector: 'app-add-produit',
  imports: [FormsModule],
  templateUrl: './add-produit.html',
})
export class AddProduitComponents implements OnInit {
  newProduit = new ProduitModel(); // un objet pour stocker les données du nouveau produit
  message: string = ''; // un message pour afficher une confirmation après l'ajout du produit

  // un constructeur pour injecter le service ProduitService dans ce composant
  constructor(private produitService: ProduitService) {}
  ngOnInit(): void {}
  addProduit() {
    console.log(this.newProduit); // afficher les données du nouveau produit dans la console
    this.produitService.ajouterProduit(this.newProduit); // ajouter le nouveau produit au service
    this.message = 'Produit ' + this.newProduit.nomProduit + ' ajouté avec succès'; // afficher un message de confirmation
  }
}
