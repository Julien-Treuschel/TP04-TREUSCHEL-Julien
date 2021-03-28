import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { AddReference } from 'src/shared/actions/panier.action';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private store : Store) { }

  ref : string = "";
  
  ngOnInit(): void {
    this.ref = this.route.snapshot.paramMap.get('id');
  }

  addPanier () {
    console.log (this.ref);
    
    this.store.dispatch (new AddReference ({"reference":this.ref}));
  }

}
