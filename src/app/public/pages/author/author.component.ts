import { Component, OnInit } from '@angular/core';
import { CardAuthor } from '../../interfaces/card-author';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent implements OnInit {

  public readonly cardList: Array<CardAuthor> = [
    { id: "001", fullname: "Kayque Melo", nickname: "reinternals", mail: "kayquemelocarreira@gmail.com", image: "assets/profile.png" },
    { id: "002", fullname: "Kayque Melo", nickname: "reinternals", mail: "kayquemelocarreira@gmail.com", image: "assets/profile.png" },
    { id: "003", fullname: "Kayque Melo", nickname: "reinternals", mail: "kayquemelocarreira@gmail.com", image: "assets/profile.png" },
    { id: "004", fullname: "Kayque Melo", nickname: "reinternals", mail: "kayquemelocarreira@gmail.com", image: "assets/profile.png" },
    { id: "005", fullname: "Kayque Melo", nickname: "reinternals", mail: "kayquemelocarreira@gmail.com", image: "assets/profile.png" },
  ];

  constructor( private _router: Router ) {}
  
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  public navigateToAuthor(id: string) {
    return this._router.navigate(['author', id])
  };

}
