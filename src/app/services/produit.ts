import { Injectable } from '@angular/core';
import { ProduitModel } from '../model/produit.model';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  produits: ProduitModel[]; // un tableau de produits
  produit!: ProduitModel; // un objet pour stocker les données d'un produit

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

  // une méthode pour retourner la liste des produits
  listeProduits(): ProduitModel[] {
    return this.produits;
  }

  // une méthode pour ajouter un produit au tableau de produits
  ajouterProduit(produit: ProduitModel) {
    this.produits.push(produit);
  }

  // une méthode pour supprimer un produit du tableau de produits
  supprimerProduit(p: ProduitModel) {
    // supprimer le produit p du tableau de produits
    console.log(p);
    // this.produits = this.produits.filter((prod) => prod.idProduit != p.idProduit);
    // ou bien
    const index = this.produits.indexOf(p, 0);
    if (index > -1) {
      this.produits.splice(index, 1);
    }
    // Ou bien
    // this.produits.forEach((cur, index) => {
    //   if (p.idProduit === cur.idProduit) {
    //     this.produits.splice(index, 1);
    //   }
    // });
  }

  // une méthode pour consulter un produit du tableau de produits
  consulterProduit(id: number): ProduitModel {
    this.produit = this.produits.find((p) => p.idProduit == id)!;
    return this.produit;
  }
}
