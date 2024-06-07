import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-default',
  templateUrl: './page-default.component.html',
  styleUrl: './page-default.component.css'
})
export class PageDefaultComponent {

  @Input() titlePage: string = "";

}
