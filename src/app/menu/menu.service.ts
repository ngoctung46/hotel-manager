import { Injectable } from '@angular/core';
import { MenuItem } from './menu-item.model';
import { Observable } from 'rxjs/Observable';
import { MENU } from './menu';
import 'rxjs/Rx';
@Injectable()
export class MenuService {

  constructor() { }

  getMenu(): Promise<MenuItem[]> {
    return Promise.resolve(MENU);
  }

}
