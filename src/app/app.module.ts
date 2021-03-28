import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { HeaderComponent } from './header/header.component';
import { ProduitsComponent } from './produits/produits.component';
import { PanierComponent } from './panier/panier.component';
import { DetailComponent } from './produits/detail/detail.component';
import { NgxsModule } from '@ngxs/store';
import { CatalogueComponent } from './produits/catalogue/catalogue.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';

const appRoutes : Routes = [
  {path:'',component:AccueilComponent},
  {path:'formulaire',component:FormulaireComponent},
  {path: 'produits', canActivate: [AuthGuard], loadChildren: () => import('./produits/produits.module').then(m => m.ProduitsModule)}
]

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    FormulaireComponent,
    HeaderComponent,
    //ProduitsComponent,
    //ServiceComponent,
    //PanierComponent,
    //DetailComponent,
    //CatalogueComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
