import { Recipe } from './recipe.model';
import { Ingredient } from '../model/ingredient.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {

  constructor() { }

  private recipes: Recipe[] = [
    new Recipe('Stack', 'Very nice', 'http://www.proveeduriapiaf.com.ar/epiaf/images/stories/virtuemart/product/roas-beff.jpg', [
      new Ingredient('Pommes', 10),
      new Ingredient('Beff', 1)
    ]),
    new Recipe('Milk', 'Fresh', 'http://www.ziuaconstanta.ro/images/stories/2016/03/03/rodica/lapte.jpg', [])
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes(){
    return this.recipes;
  }

}
