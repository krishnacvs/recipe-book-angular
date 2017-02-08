import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model'
import { Ingredient } from '../../model/ingredient.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Stack', 'Very nice', 'http://www.proveeduriapiaf.com.ar/epiaf/images/stories/virtuemart/product/roas-beff.jpg', [
      new Ingredient('Pommes', 10),
      new Ingredient('Beff', 1)
    ]),
    new Recipe('Milk', 'Fresh', 'http://www.ziuaconstanta.ro/images/stories/2016/03/03/rodica/lapte.jpg', [])
  ];

  constructor() { }

  ngOnInit() {
  }

  selectItem(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
