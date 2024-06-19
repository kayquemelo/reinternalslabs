import { Component, OnInit } from '@angular/core';
import { CardPost } from '../../interfaces/card-post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  public readonly cardList: Array<CardPost> = [
    { id: "001", title: "SQLite do Zero - part. 1", subtitle: "Desenhando a arquitetura", date: "2024-06-02", author: "Kayque Melo" },
    { id: "002", title: "SQLite do Zero - part. 2", subtitle: "Preparando o ambiente", date: "2024-06-02", author: "Kayque Melo" },
    { id: "003", title: "SQLite do Zero - part. 3", subtitle: "Quebrando a solução em partes", date: "2024-06-02", author: "Kayque Melo" },
    { id: "004", title: "SQLite do Zero - part. 4", subtitle: "Implementação e documentação", date: "2024-06-02", author: "Kayque Melo" },
    { id: "005", title: "SQLite do Zero - part. 5", subtitle: "Implementação e codificação", date: "2024-06-02", author: "Kayque Melo" },
    { id: "006", title: "SQLite do Zero - part. 6", subtitle: "Implementação e codificação", date: "2024-06-02", author: "Kayque Melo" },
  ];

  constructor(private _router: Router) {}

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  public navigateToPost(id: string) {
    return this._router.navigate(['post', id])
  };

}
