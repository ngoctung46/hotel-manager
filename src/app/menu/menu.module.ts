import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuService } from './menu.service';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [MenuService],
  declarations: [MenuComponent],
  exports: [ MenuComponent]
})
export class MenuModule { }
