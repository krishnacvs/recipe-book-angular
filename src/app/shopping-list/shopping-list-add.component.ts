import { AppModule } from './../app.module';
import { Ingredient } from './../model/ingredient.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';



@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styles: []
})
export class ShoppingListAddComponent implements OnInit {

  @Input() SelectedIngredient: Ingredient;

  constructor(private shopingListServie: ShoppingListService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const newIngredient = new Ingredient(form.value.name, form.value.amount);
    this.shopingListServie.addIngredient(newIngredient);
    this.onClear(form);
  }

  onClear(form: NgForm){
    form.reset();
  }

}
