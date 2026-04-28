import { Component, type OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProduitModel } from '../model/produit.model';

@Component({
  selector: 'app-add-produit',
  imports: [FormsModule],
  templateUrl: './add-produit.html',
})
export class AddProduitComponents implements OnInit {
  newProduit = new ProduitModel(); // un objet pour stocker les données du nouveau produit
  constructor() {}
  ngOnInit(): void {}
  addProduit() {
    console.log(this.newProduit); // afficher les données du nouveau produit dans la console
  }
}
