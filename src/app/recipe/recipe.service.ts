import { Recipe } from './recipe.model';
import { Ingredient } from '../model/ingredient.model';

export class RecipeService {

  constructor() { }

  private recipes: Recipe[] = [
    new Recipe('Stack', 'Very nice', 'http://www.proveeduriapiaf.com.ar/epiaf/images/stories/virtuemart/product/roas-beff.jpg', [
      new Ingredient('Pommes', 10),
      new Ingredient('Beff', 1)
    ]),
    new Recipe('Milk', 'Fresh', 'http://www.ziuaconstanta.ro/images/stories/2016/03/03/rodica/lapte.jpg', [])
  ];


  getRecipes(){
    return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  deleteRecipe(id: number){
    this.recipes.splice(id, 1);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

}
