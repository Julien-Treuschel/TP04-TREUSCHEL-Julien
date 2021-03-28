import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private store : Store) { }

  nbElementPanier = 0;

  ngOnInit(){
    this.store.select(state=>state.panier.length).subscribe (l => this.nbElementPanier = l);
  }
}
