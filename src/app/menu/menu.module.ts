import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuService } from './menu.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [MenuService],
  declarations: [MenuComponent],
  exports: [ MenuComponent]
})
export class MenuModule { }
