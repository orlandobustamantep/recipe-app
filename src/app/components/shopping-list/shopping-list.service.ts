import { Ingredient } from 'src/app/shared/ingredient.model'
import { EventEmitter } from '@angular/core'

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Pasta', 10),
        new Ingredient('Tomato Sauce', 2)
      ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}