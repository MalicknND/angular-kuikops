import { Injectable } from '@angular/core';
import { ProduitModel } from '../model/produit.model';
import { CategorieModel } from '../model/categorie.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  produits: ProduitModel[] = []; // un tableau de produits
  // produit!: ProduitModel; // un objet pour stocker les données d'un produit
  // categories: CategorieModel[]; // un tableau de catégories
  apiURL: string = 'http://localhost:8081/produits/api';
  constructor(private http: HttpClient) {
    // this.categories = [
    //   { idCat: 1, nomCat: 'PC' },
    //   { idCat: 2, nomCat: 'Imprimante' },
    // ];
    this.produits = [
      // {
      //   idProduit: 1,
      //   nomProduit: 'PC Asus',
      //   prixProduit: 3000.6,
      //   dateCreation: new Date('01/14/2011'),
      //   categorie: { idCat: 1, nomCat: 'PC' },
      // },
      // {
      //   idProduit: 2,
      //   nomProduit: 'Imprimante Epson',
      //   prixProduit: 450,
      //   dateCreation: new Date('12/17/2010'),
      //   categorie: { idCat: 2, nomCat: 'Imprimante' },
      // },
      // {
      //   idProduit: 3,
      //   nomProduit: 'Tablette Samsung',
      //   prixProduit: 900.123,
      //   dateCreation: new Date('02/20/2020'),
      //   categorie: { idCat: 1, nomCat: 'PC' },
      // },
    ];
  }

  // une méthode pour retourner la liste des produits
  listeProduits(): Observable<ProduitModel[]> {
    return this.http.get<ProduitModel[]>(this.apiURL);
  }

  // une méthode pour ajouter un produit au tableau de produits
  ajouterProduit(produit: ProduitModel): Observable<ProduitModel> {
    return this.http.post<ProduitModel>(this.apiURL, produit, httpOptions);
  }

  // une méthode pour supprimer un produit du tableau de produits
  supprimerProduit(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  // une méthode pour consulter un produit du tableau de produits
  consulterProduit(id: number): ProduitModel {
    return this.produits.find((p) => p.idProduit == id)!;
  }

  updaterProduit(p: ProduitModel) {
    const index = this.produits.indexOf(p, 0);
    if (index > -1) {
      this.produits.splice(index, 1);
      this.produits.splice(index, 0, p);
    }
  }

  // // une méthode pour retourner la liste des catégories
  // listeCategories(): CategorieModel[] {
  //   return this.categories;
  // }

  // // une méthode pour consulter une catégorie du tableau de catégories
  // consulterCategorie(id: number): CategorieModel {
  //   return this.categories.find((c) => c.idCat == id)!;
  // }
}
