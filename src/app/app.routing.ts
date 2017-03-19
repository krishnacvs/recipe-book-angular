import { Routes, RouterModule } from '@angular/router' 
import { RecipeComponent } from './recipe/recipe.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import { RECIPE_ROUTES } from './recipe/recipe.routes'


const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'recipes', component: RecipeComponent, children: RECIPE_ROUTES },
    { path: 'shoppinglist', component: ShoppingListComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);