import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientRoutingModule } from './ingredient-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    LayoutComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    IngredientRoutingModule,
    SharedModule,
  ]
})
export class IngredientModule { }
