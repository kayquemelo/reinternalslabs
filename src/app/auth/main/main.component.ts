import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Observable, interval, map } from 'rxjs';
import { CardPost } from '../../public/interfaces/card-post';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {

  private subscriptions: Subscription = new Subscription();
  
  public bgImage: string = 'assets/bright_bg.jpg';

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

  constructor(private _router: Router) {  }

  ngOnInit(): void {
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
}
