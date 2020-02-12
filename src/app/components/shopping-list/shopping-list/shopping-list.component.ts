import { Component, OnInit } from '@angular/core'
import { Ingredient } from 'src/shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: []
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Pasta', 10),
    new Ingredient('Tomato Sauce', 2)
  ];
  constructor() { }

  ngOnInit() {
  }

}
