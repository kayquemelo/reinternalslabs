import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable, interval, map } from 'rxjs';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrl: './author-detail.component.css'
})
export class AuthorDetailComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription = new Subscription();
  
  public bgImage: string = 'assets/cyborg_bg.png';

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

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
