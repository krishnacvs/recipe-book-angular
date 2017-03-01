import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {

  @Input() recipes: Recipe[];

  constructor(private recipeService: RecipeService) {

  }


  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
  

}
