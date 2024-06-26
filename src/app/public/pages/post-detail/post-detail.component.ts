import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval, map } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription = new Subscription();
  
  public bgImage: string = 'assets/digitization_bg.jpg';

  public readonly bgImageList: Array<string> = [
    'assets/ai_lampada_bg.jpg',
    'assets/bright_bg.jpg',
    'assets/digitization_bg.jpg',
    'assets/cyborg_bg.png',
  ];

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: "instant" });

    this.subscriptions.add(
      this.getPseudoRandomBgImagePath().subscribe(index => {
        this.bgImage = this.bgImageList[index];
      })
    );
  }

  public getPseudoRandomBgImagePath(): Observable<number> {
    return interval(5000).pipe(
      map(() => Math.floor(Math.random() * this.bgImageList.length))
    );
  }

  public scrollToDomElementID(element: HTMLElement): void {
    element.scrollIntoView({ behavior: "smooth" });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
