import { Component, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, fromEvent, interval } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';
import { CardPost } from '../../interfaces/card-post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();
  
  public bgImage: string = "assets/ai_lampada_bg.jpg";
  public showBackToTopButton: boolean = false;

  public readonly bgImageList: Array<string> = [
    'assets/ai_lampada_bg.jpg',
    'assets/bright_bg.jpg',
    'assets/digitization_bg.jpg',
    'assets/cyborg_bg.png',
  ];

  public readonly cardList: Array<CardPost> = [
    { id: "001", title: "SQLite do Zero - part. 1", subtitle: "Desenhando a arquitetura", date: "2024-06-02", author: "Kayque Melo" },
    { id: "002", title: "SQLite do Zero - part. 2", subtitle: "Preparando o ambiente", date: "2024-06-02", author: "Kayque Melo" },
    { id: "003", title: "SQLite do Zero - part. 3", subtitle: "Quebrando a solução em partes", date: "2024-06-02", author: "Kayque Melo" },
    { id: "004", title: "SQLite do Zero - part. 4", subtitle: "Implementação e documentação", date: "2024-06-02", author: "Kayque Melo" },
  ];

  private scrollPosition$: Observable<number>;

  constructor(private ngZone: NgZone, private _router: Router) {
    this.scrollPosition$ = fromEvent(window, 'scroll').pipe(
      throttleTime(100),
      map(() => window.scrollY)
    );
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.getPseudoRandomBgImagePath().subscribe(index => {
        this.bgImage = this.bgImageList[index];
      })
    );
    
    this.subscriptions.add(
      this.scrollPosition$.subscribe(position => {
        this.ngZone.run(() => {
          this.showBackToTopButton = position > 500;
        });
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

  public scrollTopTopPage(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  public navigateToPost(id: string) {
    return this._router.navigate(['post', id])
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
