import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipe = new Recipe('Dumy','Dumy','https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSQzDAlXF03sWnI7OuUtEBBXg-BOa8nQGijLOV7jU7SNUce-ySlHv0Z5Q');

  constructor() { }

  ngOnInit() {
  }

  selectItem(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
