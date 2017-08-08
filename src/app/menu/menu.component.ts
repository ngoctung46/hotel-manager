import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item.model';
import { MenuService } from './menu.service';
import 'rxjs/Rx';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: MenuItem[]=[];
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getMenu().then((menuItems: MenuItem[]) => {
      this.menu = menuItems;
    });
  }

}
