import { Component } from '@angular/core';
import { Menu } from '../interfaces/menu';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {

  public readonly currentYear: string = new Date().getFullYear().toString();

  public isCollapsedMenu: boolean = false;

  public readonly menuList: Array<Menu> = [
    { id: "01",label: "Home",      route: "/home",   icon: "" },
    { id: "02",label: "Postagens", route: "/post",   icon: "" },
    // { id: "03",label: "Autores",   route: "/author", icon: "" },
    { id: "04",label: "Entrar",    route: "/login",  icon: "" }
  ]

  public expandOrCollpaseMenu() {
    this.isCollapsedMenu = !this.isCollapsedMenu;
  }

}
