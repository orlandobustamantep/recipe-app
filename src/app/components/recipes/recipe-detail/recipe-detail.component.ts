import { Component, OnInit } from '@angular/core'
import { Recipe } from '../recipe.model'
import { ShoppingListService } from '../../shopping-list/shopping-list.service'
import { ActivatedRoute, Params } from '@angular/router'
import { RecipeService } from '../recipe.service'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe
  id: number

  constructor(private recipeService: RecipeService, private shoppingListService: ShoppingListService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }

  addIngredientsToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients)
  }

}
