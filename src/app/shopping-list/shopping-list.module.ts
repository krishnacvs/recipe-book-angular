import { FormsModule } from '@angular/forms';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list-add.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        ShoppingListAddComponent,
        ShoppingListComponent
    ],
    imports: [
        FormsModule,
        CommonModule
    ]
})
export class ShoppingListModule {

}