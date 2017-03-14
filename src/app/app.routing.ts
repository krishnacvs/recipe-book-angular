import { Routes, RouterModule } from '@angular/router' 
import { RecipeComponent } from './recipe/recipe.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component'


const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'recipes', component: RecipeComponent },
    { path: 'shoppinglist', component: ShoppingListComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);