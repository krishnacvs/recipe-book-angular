import { Component, OnInit} from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'app/shopping-list/shopping-list.service'
import { ActivatedRoute, Router } from '@angular/router'


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: []
})
export class RecipeDetailComponent implements OnInit {

  selectedRecipe: Recipe;
  recipeID: number;

  constructor(private recipeService: RecipeService, 
              private sls: ShoppingListService,
              private activateRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      params => {
        this.recipeID = +params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(+params['id']);
      }
    )
  }

  onAddToList(){
    this.sls.addIngredients(this.selectedRecipe.ingredients);
  }

  onEdit(){
    this.router.navigate(['/recipes', this.recipeID,'edit']);
  }

}
