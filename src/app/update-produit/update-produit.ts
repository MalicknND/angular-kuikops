import { Component, OnInit } from '@angular/core';
import { ProduitModel } from '../model/produit.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/produit';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-produit',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-produit.html',
  styles: ``,
})
export class UpdateProduitComponent implements OnInit {
  currentProduit = new ProduitModel(); // un objet pour stocker les données du produit à modifier

  constructor(
    private activatedRoute: ActivatedRoute, // un objet pour récupérer les paramètres de l'URL
    private router: Router, // un objet pour naviguer vers une autre page
    private produitService: ProduitService,
  ) {}

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    // récupérer l'id du produit à modifier à partir de l'URL
    this.currentProduit = this.produitService.consulterProduit(
      this.activatedRoute.snapshot.params['id'],
    );
  }

  updateProduit() {
    console.log(this.currentProduit);
    this.produitService.updaterProduit(this.currentProduit); // modifier le produit dans le service
    this.router.navigate(['produits']); // naviguer vers la page des produits
  }
}
