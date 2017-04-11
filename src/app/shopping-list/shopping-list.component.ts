import { Ingredient } from './../model/ingredient.model';
import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: []
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [];

  SelectedIngredient: Ingredient;

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.sls.getIngredients();
  }

  onSelectItem(ingredient: Ingredient){
    this.SelectedIngredient = ingredient;
  }
  

}
