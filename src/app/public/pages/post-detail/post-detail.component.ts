import { Component } from '@angular/core';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {

  public scrollToDomElementID(element: HTMLElement): void {
    element.scrollIntoView({ behavior: "smooth" });
  }

}
