import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DishRoutingModule} from "./dish-routing.module";
import { DishListPageComponent } from './dish-list-page/dish-list-page.component';
import {LayoutComponent} from "./layout/layout.component";
import {SharedModule} from "../shared/shared.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { DishAddComponent } from './dish-add/dish-add.component';
import { IngredientEditComponent } from './ingredient-edit/ingredient-edit.component';
import { KitchenwareEditComponent } from './kitchenware-edit/kitchenware-edit.component';



@NgModule({
  declarations: [
    LayoutComponent,
    DishListPageComponent,
    DishAddComponent,
    IngredientEditComponent,
    KitchenwareEditComponent,
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    CommonModule,
    SharedModule,
    DishRoutingModule,
    MatDialogModule
  ]
})
export class DishModule { }
