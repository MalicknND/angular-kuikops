import { Routes } from '@angular/router';
import { ProduitsComponents } from './produits/produits';
import { AddProduitComponents } from './add-produit/add-produit';
import { UpdateProduitComponent } from './update-produit/update-produit';

export const routes: Routes = [
  { path: 'produits', component: ProduitsComponents },
  { path: 'add-produit', component: AddProduitComponents },
  { path: 'updateProduit/:id', component: UpdateProduitComponent },
  { path: '', redirectTo: 'produits', pathMatch: 'full' },
];
