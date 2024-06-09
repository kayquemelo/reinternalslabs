import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Observable, fromEvent, throttleTime, map } from 'rxjs';

@Component({
  selector: 'app-back-scroll',
  templateUrl: './back-scroll.component.html',
  styleUrl: './back-scroll.component.css'
})
export class BackScrollComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();

  public showBackToTopButton: boolean = false;

  private scrollPosition$: Observable<number>;

  constructor(private ngZone: NgZone, private _router: Router) {
    this.scrollPosition$ = fromEvent(window, 'scroll').pipe(
      throttleTime(100),
      map(() => window.scrollY)
    );
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.scrollPosition$.subscribe(position => {
        this.ngZone.run(() => {
          this.showBackToTopButton = position > 500;
        });
      })
    )
  }

  public scrollTopTopPage(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
