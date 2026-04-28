import { Component, type OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-add-produit',
  imports: [FormsModule],
  templateUrl: './add-produit.html',
})
export class AddProduit implements OnInit {
  newProduit = new Produit(); // un objet pour stocker les données du nouveau produit
  constructor() {}
  ngOnInit(): void {}
  addProduit() {
    console.log(this.newProduit); // afficher les données du nouveau produit dans la console
  }
}
