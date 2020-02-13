import { Component } from '@angular/core'
import { Ingredient } from 'src/shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: []
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Pasta', 10),
    new Ingredient('Tomato Sauce', 2)
  ];
  
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
  }

}
