import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../model/ingredient.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styles: []
})
export class ShoppingListAddComponent implements OnInit {

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const newIngredient = new Ingredient(form.value.name, form.value.amount);
    this.sls.addIngredient(newIngredient);
    this.onClear(form);
  }

  onClear(form: NgForm){
    form.resetForm();
  }

}
