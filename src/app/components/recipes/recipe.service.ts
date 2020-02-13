import { Recipe } from "./recipe.model"
import { EventEmitter } from '@angular/core'

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            "Pizza",
            "Italiana y deliciosa",
            "https://www.kingarthurflour.com/sites/default/files/styles/featured_image/public/recipe_legacy/20-3-large.jpg?itok=1EY8KWJG"
        ),
        new Recipe(
            "Paella",
            "Delicioso platillo español",
            "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/5/20/0/CCTUL104_Ultimate-Paella_s4x3.jpg.rend.hgtvcom.826.620.suffix/1384541152950.jpeg"
        )
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}
