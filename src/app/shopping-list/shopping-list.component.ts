import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../model/ingredient.model' 
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: []
})
export class ShoppingListComponent implements OnInit {

  Ingredients: Ingredient[] = [];
  
  constructor() { }

  ngOnInit() {
  }

}
